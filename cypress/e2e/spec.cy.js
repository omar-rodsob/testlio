import SpecPage from './pages/specPage';
import user from '../fixtures/user.json';

describe('template spec', () => {
  it('passes', () => {
   cy.visit('');
   cy.wait(3000);
   //SpecPage.acceptCookies();
   SpecPage.clickApply();
   SpecPage.elements.applicationTitle().contains('Software Test Automation Engineer (API & UI Automation)');
   SpecPage.typeFirstName(user.firstName);
   SpecPage.typeLastName(user.lastName);
   SpecPage.typeEmail(user.email);
   SpecPage.typePhone(user.phone);
   SpecPage.selectFile('cypress/fixtures/OmarRodriguez-Resume.pdf');
   cy.wait(3000);
   SpecPage.elements.resuneName().contains('OmarRodriguez-Resume.pdf');
   SpecPage.typeLinkedInProfile(user.linkedinProfile);
   SpecPage.typeLocation(user.location);
   SpecPage.typeDescription(user.experience);
   SpecPage.checkDevices();
   SpecPage.typeHourRate(user.hourrate);
   SpecPage.typeworkingstatus(user.workingStatus);
   SpecPage.clickSubmit();
  })
})