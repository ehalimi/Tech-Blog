const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'Vestibulum ac est lacinia nisi venenatis tristique.',
        user_id: 4,
        post_id: 6
    },
    {
        comment_text: 'Integer ac leo. Pellentesque ultrices mattis odio.',
        user_id: 4,
        post_id: 19
    },
    {
        comment_text: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
        user_id: 9,
        post_id: 6
    },
    {
        comment_text:
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
        user_id: 7,
        post_id: 9
    },
    {
        comment_text: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
        user_id: 8,
        post_id: 1
    },
    {
        comment_text: 'Proin risus. Praesent lectus.',
        user_id: 8,
        post_id: 1
    },
    {
        comment_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.',
        user_id: 8,
        post_id: 12
    },
    {
        comment_text:
        'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
        user_id: 2,
        post_id: 19
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;