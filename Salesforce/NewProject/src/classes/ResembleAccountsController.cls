public with sharing class ResembleAccountsController {
	public List<Account> AllAccountList{get; set;}
	public ResembleAccountsController() {
		this.AllAccountList = [SELECT Id, Name FROM Account];
	}
}