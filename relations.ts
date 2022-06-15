import Post from './Post';
import PostEdge from './Post/Edge';
import PostComment from './Post/Comment';
import EmailAccount from './EmailAccount';

Post.hasMany(PostEdge, { as: 'FromCompare', foreignKey: 'fromId', sourceKey: 'id' });

PostComment.belongsTo(EmailAccount, { as: 'EmailAccount', foreignKey: 'accountId', targetKey: 'id' });

export {
  Post,
  PostEdge,
  PostComment,
  EmailAccount,
};
