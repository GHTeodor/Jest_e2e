const Page = require('./page');

class UsersPage extends Page {
    get usersList() {
        return $('#users-list');
    }

    get loadingTitle() {
        return $('#users-loading');
    }

    get usersItems() {
        return browser.react$$('User');
    }

    async loadData() {
        try {
            await this.open();
            await this.loadingTitle.waitForDisplayed({timeout: 2000});
            await this.usersList.waitForDisplayed({timeout: 2000});
        } catch (e) {
            throw new Error('Can`t download users');
        }
    }

    async deleteUser() {
        try {
            const usersCount = await this.usersItems.length;

            if (!usersCount) throw new Error('Not found user');

            await this.usersItems[0].$('user-delete').click();

            const userCountAfterDelete = await this.usersItems.length;

            if (usersCount - userCountAfterDelete !== 1) throw new Error('Didn`t delete or deleted more than 1 user');

        } catch (e) {
            throw new Error('Can`t delete user. ' + e.message);
        }
    }

    open() {
        return super.open('/users-test');
    }
}

module.exports = new UsersPage();
