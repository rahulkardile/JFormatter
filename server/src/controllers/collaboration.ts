import { Server, Socket } from 'socket.io';
import { DocumentManager } from '../models/DocumentManager';
import { validateUpdateInput } from '../utils/validation';

/**
 * Sets up WebSocket collaboration.
 * @param io - The Socket.IO server instance.
 */
export const setupCollaboration = (io: Server) => {
  io.on('connection', (socket: Socket) => {
    console.log('Client connected:', socket.id);

    socket.on('joinDoc', (docId: string) => {
      socket.join(docId);
      const doc = DocumentManager.getDocument(docId) || '{}';
      socket.emit('initialDoc', { docId, json: doc });
    });

    socket.on('updateDoc', (data: { docId: string; json: string }) => {
      try {
        const validated = validateUpdateInput(data);
        const updatedJson = DocumentManager.updateDocument(validated.docId, validated.json);
        io.to(validated.docId).emit('jsonUpdated', { docId: validated.docId, json: updatedJson });
      } catch (e) {
        socket.emit('error', { message: (e as Error).message });
      }
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.id);
    });
  });
};