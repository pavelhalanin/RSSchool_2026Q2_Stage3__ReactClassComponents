import type { IPaginationData } from './Left/Pagination/IPaginationData';

export default class CardListInit {
  static getLimit() {
    return 8;
  }

  static getInitPagination() {
    const INIT_PAGINATION: IPaginationData['pagination'] = {
      TOTOL_ITEMS: 0,
      LIMITL_ITEMS: CardListInit.getLimit(),
      CURRENT_PAGE: 1,
      SKIP_ITEMS: 0,
      LAST_PAGE: 0,
    };
    return INIT_PAGINATION;
  }
}
