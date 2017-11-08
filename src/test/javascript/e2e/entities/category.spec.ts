import { browser, element, by, $ } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';
const path = require('path');

describe('Category e2e test', () => {

    let navBarPage: NavBarPage;
    let categoryDialogPage: CategoryDialogPage;
    let categoryComponentsPage: CategoryComponentsPage;
    const fileToUpload = '../../../../main/webapp/content/images/logo-jhipster.png';
    const absolutePath = path.resolve(__dirname, fileToUpload);
    

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().loginWithOAuth('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Categories', () => {
        navBarPage.goToEntity('category');
        categoryComponentsPage = new CategoryComponentsPage();
        expect(categoryComponentsPage.getTitle()).toMatch(/jhipster4102MonApp.category.home.title/);

    });

    it('should load create Category dialog', () => {
        categoryComponentsPage.clickOnCreateButton();
        categoryDialogPage = new CategoryDialogPage();
        expect(categoryDialogPage.getModalTitle()).toMatch(/jhipster4102MonApp.category.home.createOrEditLabel/);
        categoryDialogPage.close();
    });

    it('should create and save Categories', () => {
        categoryComponentsPage.clickOnCreateButton();
        categoryDialogPage.setDescriptionInput('description');
        expect(categoryDialogPage.getDescriptionInput()).toMatch('description');
        categoryDialogPage.setSortOrderInput('5');
        expect(categoryDialogPage.getSortOrderInput()).toMatch('5');
        categoryDialogPage.setDateAddedInput('2000-12-31');
        expect(categoryDialogPage.getDateAddedInput()).toMatch('2000-12-31');
        categoryDialogPage.setDateModifiedInput('2000-12-31');
        expect(categoryDialogPage.getDateModifiedInput()).toMatch('2000-12-31');
        categoryDialogPage.statusSelectLastOption();
        categoryDialogPage.parentSelectLastOption();
        // categoryDialogPage.productSelectLastOption();
        categoryDialogPage.save();
        expect(categoryDialogPage.getSaveButton().isPresent()).toBeFalsy();
    }); 

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class CategoryComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-category div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class CategoryDialogPage {
    modalTitle = element(by.css('h4#myCategoryLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    descriptionInput = element(by.css('input#field_description'));
    sortOrderInput = element(by.css('input#field_sortOrder'));
    dateAddedInput = element(by.css('input#field_dateAdded'));
    dateModifiedInput = element(by.css('input#field_dateModified'));
    statusSelect = element(by.css('select#field_status'));
    parentSelect = element(by.css('select#field_parent'));
    productSelect = element(by.css('select#field_product'));

    getModalTitle() {
        return this.modalTitle.getAttribute('jhiTranslate');
    }

    setDescriptionInput = function (description) {
        this.descriptionInput.sendKeys(description);
    }

    getDescriptionInput = function () {
        return this.descriptionInput.getAttribute('value');
    }

    setSortOrderInput = function (sortOrder) {
        this.sortOrderInput.sendKeys(sortOrder);
    }

    getSortOrderInput = function () {
        return this.sortOrderInput.getAttribute('value');
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

    setStatusSelect = function (status) {
        this.statusSelect.sendKeys(status);
    }

    getStatusSelect = function () {
        return this.statusSelect.element(by.css('option:checked')).getText();
    }

    statusSelectLastOption = function () {
        this.statusSelect.all(by.tagName('option')).last().click();
    }
    parentSelectLastOption = function () {
        this.parentSelect.all(by.tagName('option')).last().click();
    }

    parentSelectOption = function (option) {
        this.parentSelect.sendKeys(option);
    }

    getParentSelect = function () {
        return this.parentSelect;
    }

    getParentSelectedOption = function () {
        return this.parentSelect.element(by.css('option:checked')).getText();
    }

    productSelectLastOption = function () {
        this.productSelect.all(by.tagName('option')).last().click();
    }

    productSelectOption = function (option) {
        this.productSelect.sendKeys(option);
    }

    getProductSelect = function () {
        return this.productSelect;
    }

    getProductSelectedOption = function () {
        return this.productSelect.element(by.css('option:checked')).getText();
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
