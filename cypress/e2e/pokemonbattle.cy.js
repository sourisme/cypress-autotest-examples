var password = 'YOUR PASSWORD'
var mail = 'YOUR E-MAIL'

describe('Тестирование pokemonbattle оплаты', function () {
    it('1. [Positive] Оплата', function () {
        cy.visit('https://pokemonbattle.me/')
        cy.get(':nth-child(1) > .auth__input').type(mail)
        cy.get('#password').type(password)
        cy.wait(4000);
        cy.get('.header__btns > [href="/shop"]').click()
        cy.get(':nth-child(2) > .shop__button').click()
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5555555555555599')
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1224')
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125')
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('test')
        cy.wait(10000)
        cy.get('.pay-btn').click()
        cy.get('#cardnumber').type('56456')
        cy.get('.payment__submit-button').click()
        cy.get('.payment__adv').click()
        cy.get('.header__btn-link').click()
    })

    it('2. [Negative] Оплата, неверный cvc/cvv', function () {
        cy.visit('https://pokemonbattle.me/')
        cy.get(':nth-child(1) > .auth__input').type(mail)
        cy.get('#password').type(password)
        cy.wait(4000);
        cy.get('.header__btns > [href="/shop"]').click()
        cy.get(':nth-child(12) > .shop__button').click()
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5555555555555599')
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1224')
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('124')
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('test')
        cy.wait(5000)
        cy.get('.pay-btn').click()
        cy.wait(5000)
        cy.get('.pay-inputs-box > :nth-child(2) > .pay__mistake-v2').contains('Неверный код')
    })
})