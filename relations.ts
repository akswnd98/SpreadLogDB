import Post from './Post';
import PostEdge from './Post/Edge';

Post.hasMany(PostEdge, { as: 'FromCompare', foreignKey: 'fromId', sourceKey: 'id' });

export {
  Post,
  PostEdge,
};
