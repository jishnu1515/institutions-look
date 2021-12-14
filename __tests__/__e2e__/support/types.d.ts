declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to select DOM element by data-testid attribute.
         * @example cy.queryByTestId('editHero')
         */
        queryByTestId(testId: string): Chainable<Element>;

        /**
         * Custom command to check if a "error" type of alert was visible for the required duration.
         * @example cy.wasErrorDisplayed()
         */
        wasErrorDisplayed(): Chainable<Subject>;

        /**
         * Custom command to check if a "success" type of alert was visible for the required duration.
         * @example cy.wasSuccessDisplayed()
         */
        wasSuccessDisplayed(): Chainable<Subject>;

        /**
         * Custom command to press "Yes" on the confirm dialog.
         * @example cy.confirm()
         */
        confirm(): Chainable<Subject>;

        /**
         * Custom command to drag one element onto another.
         * @example cy.drag('#dragged', '#draggedInto')
         */
        drag(sourceSelector: string, targetSelector: string): Chainable<Subject>;
    }
}
