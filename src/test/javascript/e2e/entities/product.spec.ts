import { browser, element, by, $ } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';
const path = require('path');

describe('Product e2e test', () => {

    let navBarPage: NavBarPage;
    let productDialogPage: ProductDialogPage;
    let productComponentsPage: ProductComponentsPage;
    const fileToUpload = '../../../../main/webapp/content/images/logo-jhipster.png';
    const absolutePath = path.resolve(__dirname, fileToUpload);
    

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().loginWithOAuth('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Products', () => {
        navBarPage.goToEntity('product');
        productComponentsPage = new ProductComponentsPage();
        expect(productComponentsPage.getTitle()).toMatch(/jhipster4102MonApp.product.home.title/);

    });

    it('should load create Product dialog', () => {
        productComponentsPage.clickOnCreateButton();
        productDialogPage = new ProductDialogPage();
        expect(productDialogPage.getModalTitle()).toMatch(/jhipster4102MonApp.product.home.createOrEditLabel/);
        productDialogPage.close();
    });

    it('should create and save Products', () => {
        productComponentsPage.clickOnCreateButton();
        productDialogPage.setTitleInput('title');
        expect(productDialogPage.getTitleInput()).toMatch('title');
        productDialogPage.setKeywordsInput('keywords');
        expect(productDialogPage.getKeywordsInput()).toMatch('keywords');
        productDialogPage.setDescriptionInput('description');
        expect(productDialogPage.getDescriptionInput()).toMatch('description');
        productDialogPage.setRatingInput('5');
        expect(productDialogPage.getRatingInput()).toMatch('5');
        productDialogPage.setDateAddedInput('2000-12-31');
        expect(productDialogPage.getDateAddedInput()).toMatch('2000-12-31');
        productDialogPage.setDateModifiedInput('2000-12-31');
        expect(productDialogPage.getDateModifiedInput()).toMatch('2000-12-31');
        productDialogPage.save();
        expect(productDialogPage.getSaveButton().isPresent()).toBeFalsy();
    }); 

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class ProductComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-product div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class ProductDialogPage {
    modalTitle = element(by.css('h4#myProductLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    titleInput = element(by.css('input#field_title'));
    keywordsInput = element(by.css('input#field_keywords'));
    descriptionInput = element(by.css('input#field_description'));
    ratingInput = element(by.css('input#field_rating'));
    dateAddedInput = element(by.css('input#field_dateAdded'));
    dateModifiedInput = element(by.css('input#field_dateModified'));

    getModalTitle() {
        return this.modalTitle.getAttribute('jhiTranslate');
    }

    setTitleInput = function (title) {
        this.titleInput.sendKeys(title);
    }

    getTitleInput = function () {
        return this.titleInput.getAttribute('value');
    }

    setKeywordsInput = function (keywords) {
        this.keywordsInput.sendKeys(keywords);
    }

    getKeywordsInput = function () {
        return this.keywordsInput.getAttribute('value');
    }

    setDescriptionInput = function (description) {
        this.descriptionInput.sendKeys(description);
    }

    getDescriptionInput = function () {
        return this.descriptionInput.getAttribute('value');
    }

    setRatingInput = function (rating) {
        this.ratingInput.sendKeys(rating);
    }

    getRatingInput = function () {
        return this.ratingInput.getAttribute('value');
    }

    setDateAddedInput = function (dateAdded) {
        this.dateAddedInput.sendKeys(dateAdded);
    }

    getDateAddedInput = function () {
        return this.dateAddedInput.getAttribute('value');
    }

    setDateModifiedInput = function (dateModified) {
        this.dateModifiedInput.sendKeys(dateModified);
    }

    getDateModifiedInput = function () {
        return this.dateModifiedInput.getAttribute('value');
    }

    save() {
        this.saveButton.click();
    }

    close() {
        this.closeButton.click();
    }

    getSaveButton() {
        return this.saveButton;
    }
}
