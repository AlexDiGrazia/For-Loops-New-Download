// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  if (array.length === 0) {
    return array;
  }
  let answer = [];
  for (let account of array) {
    let withdrawals = 0;
    let deposits = 0;
    if (account.withdrawals) {
      for (let withdrawal of account.withdrawals) {
        withdrawals = withdrawals + withdrawal;
      }
    }
    if (account.deposits) {
      for (let deposit of account.deposits) {
        deposits = deposits + deposit;
      }
    }
    if (deposits - withdrawals !== account.balance) {
      answer.push(account);
    }
  }
  return answer;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
