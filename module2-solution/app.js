(function() {
'use strict';

    angular.module('ShoppingListCheckOff', [])
           .controller('ToBuyController', ToBuyController)
           .controller('AlreadyBoughtController', AlreadyBoughtController)
           .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var itemBuyer = this;
        itemBuyer.items = ShoppingListCheckOffService.getNotBoughtItems();

        itemBuyer.buyItem = function(itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var itemUnbuyer = this;
        itemUnbuyer.items = ShoppingListCheckOffService.getBoughtItems();

        itemUnbuyer.unbuyItem = function(itemIndex) {
            ShoppingListCheckOffService.unbuyItem(itemIndex);
        };
    }


function ShoppingListCheckOffService() {
    var service = this;
    var notBoughtItems = [];
    var boughtItems = [];

    service._addItem = function(name, quantity) {
        notBoughtItems.push({name: name, quantity: quantity});
    };
    service._addItem('Cookies', Math.floor(Math.random() * 100));
    service._addItem('Fish sticks', Math.floor(Math.random() * 100));
    service._addItem('Creme Fraiche', Math.floor(Math.random() * 100));
    service._addItem('Ice Cream Crapping Taco', Math.floor(Math.random() * 100));
    service._addItem('Harbucks Coffee', Math.floor(Math.random() * 100));

    service.buyItem = function(index) {
        boughtItems.push(notBoughtItems[index]);
        notBoughtItems.splice(index, 1);
    };

    service.unbuyItem = function(index) {
        notBoughtItems.push(boughtItems[index]);
        boughtItems.splice(index, 1);
    };

    service.getNotBoughtItems = function() {
        return notBoughtItems;
    };

    service.getBoughtItems = function() {
        return boughtItems;
    };
}

})();
