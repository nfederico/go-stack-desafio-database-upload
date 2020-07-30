 import AppError from '../errors/AppError';
 import Transaction from '../models/Transaction';
 import TransactionsRepository from '../repositories/TransactionsRepository';
import { getCustomRepository } from 'typeorm';
import { response } from 'express';


class DeleteTransactionService {
  public async execute(id :string): Promise<void> {
    const transactionRepository = getCustomRepository(TransactionsRepository);
    const transaction = await transactionRepository.findOne(id);
    if (! transaction) {
      throw new AppError('Transaction do not exists');
    }
    await transactionRepository.remove(transaction);

  }
}

export default DeleteTransactionService;
