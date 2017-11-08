import { browser, element, by, $ } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';
const path = require('path');

describe('Address e2e test', () => {

    let navBarPage: NavBarPage;
    let addressDialogPage: AddressDialogPage;
    let addressComponentsPage: AddressComponentsPage;
    const fileToUpload = '../../../../main/webapp/content/images/logo-jhipster.png';
    const absolutePath = path.resolve(__dirname, fileToUpload);
    

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().loginWithOAuth('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Addresses', () => {
        navBarPage.goToEntity('address');
        addressComponentsPage = new AddressComponentsPage();
        expect(addressComponentsPage.getTitle()).toMatch(/jhipster4102MonApp.address.home.title/);

    });

    it('should load create Address dialog', () => {
        addressComponentsPage.clickOnCreateButton();
        addressDialogPage = new AddressDialogPage();
        expect(addressDialogPage.getModalTitle()).toMatch(/jhipster4102MonApp.address.home.createOrEditLabel/);
        addressDialogPage.close();
    });

    it('should create and save Addresses', () => {
        addressComponentsPage.clickOnCreateButton();
        addressDialogPage.setAddress1Input('address1');
        expect(addressDialogPage.getAddress1Input()).toMatch('address1');
        addressDialogPage.setAddress2Input('address2');
        expect(addressDialogPage.getAddress2Input()).toMatch('address2');
        addressDialogPage.setCityInput('city');
        expect(addressDialogPage.getCityInput()).toMatch('city');
        addressDialogPage.setPostcodeInput('postcode');
        expect(addressDialogPage.getPostcodeInput()).toMatch('postcode');
        addressDialogPage.setCountryInput('country');
        expect(addressDialogPage.getCountryInput()).toMatch('country');
        addressDialogPage.customerSelectLastOption();
        addressDialogPage.save();
        expect(addressDialogPage.getSaveButton().isPresent()).toBeFalsy();
    }); 

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class AddressComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-address div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class AddressDialogPage {
    modalTitle = element(by.css('h4#myAddressLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    address1Input = element(by.css('input#field_address1'));
    address2Input = element(by.css('input#field_address2'));
    cityInput = element(by.css('input#field_city'));
    postcodeInput = element(by.css('input#field_postcode'));
    countryInput = element(by.css('input#field_country'));
    customerSelect = element(by.css('select#field_customer'));

    getModalTitle() {
        return this.modalTitle.getAttribute('jhiTranslate');
    }

    setAddress1Input = function (address1) {
        this.address1Input.sendKeys(address1);
    }

    getAddress1Input = function () {
        return this.address1Input.getAttribute('value');
    }

    setAddress2Input = function (address2) {
        this.address2Input.sendKeys(address2);
    }

    getAddress2Input = function () {
        return this.address2Input.getAttribute('value');
    }

    setCityInput = function (city) {
        this.cityInput.sendKeys(city);
    }

    getCityInput = function () {
        return this.cityInput.getAttribute('value');
    }

    setPostcodeInput = function (postcode) {
        this.postcodeInput.sendKeys(postcode);
    }

    getPostcodeInput = function () {
        return this.postcodeInput.getAttribute('value');
    }

    setCountryInput = function (country) {
        this.countryInput.sendKeys(country);
    }

    getCountryInput = function () {
        return this.countryInput.getAttribute('value');
    }

    customerSelectLastOption = function () {
        this.customerSelect.all(by.tagName('option')).last().click();
    }

    customerSelectOption = function (option) {
        this.customerSelect.sendKeys(option);
    }

    getCustomerSelect = function () {
        return this.customerSelect;
    }

    getCustomerSelectedOption = function () {
        return this.customerSelect.element(by.css('option:checked')).getText();
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
