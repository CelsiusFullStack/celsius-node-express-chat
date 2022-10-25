# Chat Messenger  API

/api/v1

/users
    - /me
    - /me/posts
    - /me/posts/:id
    - /:id

Rutas y procesos a implementar en la api de chat.
=============================
3.a) /api/v1/conversations  (protegida) verbos http a utilizar : get , post.
    - Obtener todas las conversaciones del usuario loggeado.
    - crear conversaciones nuevas.

3.b) /api/v1/conversations/:id (protegida) verbos http a utilizar : get, delete, (patch or put).
    - Mostrar una conversacion en especifico. 
    - Eliminar y modificar desde aqui.

3.c) /api/v1/conversations/:conversation_id/messages  (protegida)  verbos http a utilizar : get, post.
    - Obtener todos los mensajes que tiene la conversacion.
    - Crear Nuevos Mensajes.

3.d) /api/v1/conversations/:conversation_id/messages/:message_id (protegida)  verbos : delete, get.
    - Obtener un mensaje especifico.
    - Solo permiso para eliminar el mensaje, no se permite modificar.

4 Retos Opcionales.
=============================
4.a) /api/v1/conversations/:conversation_id/participants (protegida)  verbos : get, post.
    - Obtener todos los participantes de una conversacion.
    - Permitira agregar nuevos participantes a la conversacion.

4.b) /api/v1/conversations/:conversation_id/participants/:participant_id (protegida)  verbos : get, delete.
    - Obtener un participante e especifico de una conversacion.
    - Permitira eliminar participantes de la conversacion.
    