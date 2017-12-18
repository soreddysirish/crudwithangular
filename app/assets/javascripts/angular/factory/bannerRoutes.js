app.factory('flightBannerRoutes', ["$resource", "Upload", function ($resource, Upload) {
  var rule = $resource('/seo-banner-api/manager/banners', {id: '@id'}, {
  });
  rule.update = function (bannerData,image) {
    return Upload.upload({
      url: '/seo-banner-api/manager/banners/submitflightbannertype',
      fileFormDataName: 'files[]',
      file: image,
      fields: bannerData
    });
  };
  return rule;
}]);

app.factory('hotelBannerRoutes', ["$resource", "Upload", function ($resource, Upload) {
  var rule = $resource('/seo-banner-api/manager/banners', {id: '@id'}, {
  });
  rule.update = function (bannerData,image) {
    return Upload.upload({
      url: '/seo-banner-api/manager/banners/submithotelbannertype',
      fileFormDataName: 'files[]',
      file: image,
      fields: bannerData
    });
  };
  return rule;
}]);

app.factory('trainBannerRoutes', ["$resource", "Upload", function ($resource, Upload) {
  var rule = $resource('/seo-banner-api/manager/banners', {id: '@id'}, {
  });
  rule.update = function (bannerData,image) {
    return Upload.upload({
      url: '/seo-banner-api/manager/banners/submittrainbannertype',
      fileFormDataName: 'files[]',
      file: image,
      fields: bannerData
    });
  };
  return rule;
}]);
