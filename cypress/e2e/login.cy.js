describe('Тестирование login.qa.studio', function () {
    it('1. [Positive] Авторизация', function () {
        cy.visit('https://login.qa.studio')
        cy.get('#mail').type('german@dolnikov.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible').click()
    })
 
 
    it('2. [Positive] Восстановление пароля', function () {
        cy.visit('https://login.qa.studio')
        cy.get('#forgotEmailButton').click()
        cy.get('#mailForgot').type('german@dolnikov.ru')
        cy.get('#restoreEmailButton').click()
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible').click()
    })

    it('3. [Negative] Логин верный, пароль неверный', function () {
        cy.visit('https://login.qa.studio')
        cy.get('#mail').type('german@dolnikov.ru')
        cy.get('#pass').type('iLoveqastudio2')
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible').click()
    })

    it('4. [Negative] Логин неверный, пароль верный', function () {
        cy.visit('https://login.qa.studio')
        cy.get('#mail').type('germn@dolnikov.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible').click()
    })
    
    it('5. [Negative] Неверная валидация - логин', function () {
        cy.visit('https://login.qa.studio')
        cy.get('#mail').type('germandolnikov.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible').click()
    })

    it('6. [Positive] Приведение к строчным буквам', function () {
        cy.visit('https://login.qa.studio')
        cy.get('#mail').type('gErMan@doLNiKov.rU')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible').click()
    })
})