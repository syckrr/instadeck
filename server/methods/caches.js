Meteor.methods({
  '/caches/like/media': function (mediaId) {
    this.unblock();
    var user = Meteor.user();  
    if (!user)
      return;

    try {
      InstagramSDK.likeMedia(mediaId, {
        accessToken: user.services.instagram.accessToken
      });
    } catch (e) {
      console.log(e.toString());
    }
  },

  '/caches/update/user_feed': function () {
    this.unblock();
    Caches.updateUserFeed();
  },

  '/caches/update/instagram_account_feed': function (instagramId) {
    this.unblock();
    Caches.updateInstagramAccountFeed(instagramId);
  }
});
