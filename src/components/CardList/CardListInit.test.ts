import { describe, it, expect } from 'vitest';
import CardListInit from './CardListInit';

describe('CardListInit', () => {
  describe('getLimit', () => {
    it('should return 8', () => {
      const limit = CardListInit.getLimit();
      expect(limit).toBe(8);
    });

    it('should return a number', () => {
      const limit = CardListInit.getLimit();
      expect(typeof limit).toBe('number');
    });
  });

  describe('getInitPagination', () => {
    it('should return initial pagination object', () => {
      const pagination = CardListInit.getInitPagination();

      expect(pagination).toBeTruthy();
      expect(typeof pagination).toBe('object');
    });

    it('should have correct TOTOL_ITEMS value', () => {
      const pagination = CardListInit.getInitPagination();
      expect(pagination.TOTOL_ITEMS).toBe(0);
    });

    it('should have correct LIMITL_ITEMS value', () => {
      const pagination = CardListInit.getInitPagination();
      expect(pagination.LIMITL_ITEMS).toBe(8);
    });

    it('should have correct CURRENT_PAGE value', () => {
      const pagination = CardListInit.getInitPagination();
      expect(pagination.CURRENT_PAGE).toBe(1);
    });

    it('should have correct SKIP_ITEMS value', () => {
      const pagination = CardListInit.getInitPagination();
      expect(pagination.SKIP_ITEMS).toBe(0);
    });

    it('should have correct LAST_PAGE value', () => {
      const pagination = CardListInit.getInitPagination();
      expect(pagination.LAST_PAGE).toBe(0);
    });
  });
});
