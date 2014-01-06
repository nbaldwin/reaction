Package.describe({
  summary: "Reaction Shop - commerce package for Reaction platform"
});

Npm.depends({
  "node-geocoder": "0.6.0"
});

Package.on_use(function (api, where) {
  api.use([
    "standard-app-packages",
    "coffeescript",
    "simple-schema",
    "collection2",
    "collection-behaviours",
    "roles",
    "underscore-string-latest",
    "handlebars-server"
  ], ["client", "server"]);
  api.use([
    "autoform",
    "bootstrap3-less",
    "accounts-base",
    "iron-router",
    "less",
    "reaction-dashboard",
    "reaction-filepicker"
  ], ["client"]);
  api.use([
    "underscore"
  ], ["server"]);

  api.add_files([
    "lib/vendor/header_spy.coffee",
    "common/collections.coffee",
    "common/hooks.coffee"
  ], ["client", "server"]);
  api.add_files([
    "lib/vendor/select2/select2.js",
    "lib/vendor/select2/select2.css",
    "lib/vendor/select2-bootstrap-css/select2-bootstrap.css",

    "lib/vendor/owl.carousel/owl-carousel/owl.carousel.css",
    "lib/vendor/owl.carousel/owl-carousel/owl.theme.css",
    "lib/vendor/owl.carousel/owl-carousel/owl.carousel.js",
    "lib/vendor/imagesLoaded/imagesloaded.pkgd.js",

    "client/register.coffee",
    "client/app.coffee",
    "client/helpers.coffee",
    "client/subscriptions.coffee",
    "client/routing.coffee",

    "client/templates/shopHeader/shopHeader.html",
    "client/templates/shopHeader/shopHeader.coffee",

    "client/templates/shopHeader/tags/tags.html",
    "client/templates/shopHeader/tags/tags.coffee",
    "client/templates/shopHeader/tags/tags.less",

    "client/templates/shopHeader/shopNavElements/shopNavElements.html",
    "client/templates/shopHeader/shopNavElements/shopNavElements.coffee",

    "client/templates/shoppingCart/shoppingCart.html",
    "client/templates/shoppingCart/shoppingCart.coffee",
    "client/templates/shoppingCart/shoppingCart.less",

    "client/templates/shoppingCart/shoppingCartCheckout.html",
    "client/templates/shoppingCart/shoppingCartCheckout.coffee",

    "client/templates/shoppingCart/shoppingCartAddress.html",
    "client/templates/shoppingCart/shoppingCartAddress.coffee",
    "client/templates/shoppingCart/shoppingCartAddress.less",

    "client/templates/dashboard/widget/widget.html",
    "client/templates/dashboard/widget/widget.coffee",
    "client/templates/dashboard/widget/widget.less",

    "client/templates/dashboard/shopwelcome/shopwelcome.html",

    "client/templates/dashboard/customers/customers.html",
    "client/templates/dashboard/customers/customers.coffee",

    "client/templates/dashboard/orders/orders.html",
    "client/templates/dashboard/orders/orders.coffee",

    "client/templates/settings/settingsGeneral/settingsGeneral.html",
    "client/templates/settings/settingsGeneral/settingsGeneral.coffee",
    "client/templates/settings/settingsGeneral/settingsGeneral.less",

    "client/templates/settings/settingsAccount/settingsAccount.html",
    "client/templates/settings/settingsAccount/settingsAccount.coffee",

    "client/templates/settings/settingsAccount/shopMember/shopMember.html",
    "client/templates/settings/settingsAccount/shopMember/shopMember.coffee",
    "client/templates/settings/settingsAccount/shopMember/shopMember.less",

    "client/templates/settings/settingsAccount/shopMember/memberForm/memberForm.html",
    "client/templates/settings/settingsAccount/shopMember/memberForm/memberForm.coffee",

    "client/templates/products/products.html",
    "client/templates/products/products.less",

    "client/templates/products/productList/productList.html",
    "client/templates/products/productList/productList.coffee",
    "client/templates/products/productList/productList.less",

    "client/templates/products/productGrid/productGrid.html",
    "client/templates/products/productGrid/productGrid.coffee",
    "client/templates/products/productGrid/productGrid.less",

    "client/templates/products/productDetail/productDetail.html",
    "client/templates/products/productDetail/productDetail.coffee",
    "client/templates/products/productDetail/productDetail.less",

    "client/templates/products/productDetail/productImageGallery/productImageGallery.html",
    "client/templates/products/productDetail/productImageGallery/productImageGallery.coffee",
    "client/templates/products/productDetail/productImageGallery/productImageGallery.less",

    "client/templates/products/productDetail/social/social.html",
    "client/templates/products/productDetail/social/social.coffee",
    "client/templates/products/productDetail/social/social.less",

    "client/templates/products/productDetail/variants/variant.html",
    "client/templates/products/productDetail/variants/variant.coffee",
    "client/templates/products/productDetail/variants/variant.less",

    "client/templates/products/productDetail/variants/variantFormModal/variantFormModal.html",
    "client/templates/products/productDetail/variants/variantFormModal/variantFormModal.coffee",
    "client/templates/products/productDetail/variants/variantFormModal/variantFormModal.less",

    "client/templates/products/productDetail/variants/variantFormModal/variantMetafieldFormGroup/variantMetafieldFormGroup.html",
    "client/templates/products/productDetail/variants/variantFormModal/variantMetafieldFormGroup/variantMetafieldFormGroup.coffee",

    "client/templates/products/productDetail/options/options.html",
    "client/templates/products/productDetail/options/options.coffee",
    "client/templates/products/productDetail/options/options.less",

    "client/templates/products/productDetail/options/optionsModal/optionsModal.html",
    "client/templates/products/productDetail/options/optionsModal/optionsModal.coffee",
    "client/templates/products/productDetail/options/optionsModal/optionsModal.less",

    "client/templates/products/productDetail/options/optionFormGroup/optionFormGroup.html",

    "client/templates/notice/unauthorized.html",

    "client/templates/notice/shopNotFound.html"
  ], ["client"]);
  api.add_files([
    "server/app.coffee",
    "server/methods.coffee",
    "server/publications.coffee",
    "server/emailTemplates/shopMemberInvite.handlebars"
  ], ["server"]);

  api.export([
    "install_spy",
    "ShopController",
    "Products",
    "Orders",
    "Customers",
    "ShopMemberSchema",
    "ProductVariantSchema",
    "CustomerAddressSchema",
    "VariantMediaSchema",
    "MetafieldSchema",
    "CartItemSchema",
    "variant",
    "Shop",
    "Cart",
    "Tags"
  ], ["client", "server"]);
});
