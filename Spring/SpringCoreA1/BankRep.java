interface BankAccountRepository{
    public double getBalance(long accountId);
    public double updateBalance(long accountID,double newBalance);
}
interface BankAccountService{
    public double withdraw(long accountId, double balance);
    public double deposit(long accountId, double balance);
    public double getBalance(long accountId);
    public boolean fundTransfer(long fromAccount, long toAccount, double amount);
}
class BankAccountRepositoryImpl implements BankAccountRepository{

    @Override
    public double getBalance(long accountId) {
        return 0;
    }

    @Override
    public double updateBalance(long accountID, double newBalance) {
        return 0;
    }
}

class BankAccountServiceImpl implements BankAccountService{

    @Override
    public double withdraw(long accountId, double balance) {
        return 0;
    }

    @Override
    public double deposit(long accountId, double balance) {
        return 0;
    }

    @Override
    public double getBalance(long accountId) {
        return 0;
    }

    @Override
    public boolean fundTransfer(long fromAccount, long toAccount, double amount) {
        return false;
    }
}
class BankAccount{
    long accountId;
    String accountHolderName;
    String accountType;
    long accountBalance;

    public BankAccount(long accountId, String accountHolderName, String accountType, long accountBalance) {
        this.accountId = accountId;
        this.accountHolderName = accountHolderName;
        this.accountType = accountType;
        this.accountBalance = accountBalance;
    }
}
class BankAccountController extends BankAccount {
    public BankAccountController(long accountId, String accountHolderName, String accountType, long accountBalance) {
        super(accountId, accountHolderName, accountType, accountBalance);
    }
    public double withdraw(long accountId, double balance){
    return 0;
    }
    public double deposit(long accountId, double balance){
        return 0;
    }
    public double getBalance(long accountId){
        return 0;
    }
    public boolean fundTransfer(long fromAccount, long toAccount){
        return false;
    }

}

public class BankRep {
    public static void main(String[] args) {

    }
}
