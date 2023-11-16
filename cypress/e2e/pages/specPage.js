class SpecPages{
    elements ={
        cookiesButton:()=>cy.get('.styles__buttons-container--1GIqr > .primary__default--25RCR'),
        applyButton:()=>cy.get('[id="apply_button"]'),
        applicationTitle:()=>cy.get('[class="app-title"]'),
        firstNameInput:()=>cy.get('[id="first_name"]'),
        lastNameInput:()=>cy.get('[id="last_name"]'),
        emailInput:()=>cy.get('[id="email"]'),
        phoneInput:()=>cy.get('[id="phone"]'),
        resumeFile:()=>cy.get('.drop-zone'),
        resuneName:()=>cy.get('[id="resume_filename"]'),
        linkedinInput:()=>cy.get('[name="job_application[answers_attributes][0][text_value]"]'),
        timeZoneInput:()=>cy.get('[name="job_application[answers_attributes][1][text_value]"]'),
        jobDescription:()=>cy.get('[name="job_application[answers_attributes][2][text_value]"]'),
        desaireRate:()=>cy.get('#job_application_answers_attributes_4_text_value'),
        checkBoxDevices:()=>cy.get('[type="checkbox"]'),
        currentStatusInput:()=>cy.get('#job_application_answers_attributes_5_text_value'),
        submitButton:()=>cy.get('[id="submit_app"]')
    }

    acceptCookies(){
        this.elements.cookiesButton().click();
    }

    clickApply(){
        this.elements.applyButton().click();
    }

    typeFirstName(firstName){
        this.elements.firstNameInput().type(firstName);
    }

    typeLastName(lastName){
        this.elements.lastNameInput().type(lastName);
    }

    typeEmail(email){
        this.elements.emailInput().type(email);
    }

    typePhone(phone){
        this.elements.phoneInput().type(phone);
    }

    selectFile(filePath){
        this.elements.resumeFile().selectFile(filePath,{ action: 'drag-drop',force: true });
    }

    typeLinkedInProfile(linkedinProfile){
        this.elements.linkedinInput().type(linkedinProfile);
    }

    typeLocation(location){
        this.elements.timeZoneInput().type(location);
    }

    typeDescription(description){
        this.elements.jobDescription().type(JSON.stringify(description));
    }

    checkDevices(){
        this.elements.checkBoxDevices().check(['175608585','175608586','175608587'])
    }

    typeHourRate(rate){
        this.elements.desaireRate().type(rate);
    }

    typeworkingstatus(status){
        this.elements.currentStatusInput().type(status);
    }

    clickSubmit(){
        this.elements.submitButton().click();
    }
}
export default new SpecPages();