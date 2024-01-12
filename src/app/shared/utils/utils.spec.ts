import { pluck, range } from './utils';

describe('utils', () => {
  describe('range', () => {
    it('returns correct range from 1 to 5', () => {
      expect(range(1, 5)).toEqual([1, 2, 3, 4]);
    });
    it('returns correct range from 41 to 48', () => {
      expect(range(41, 48)).toEqual([41, 42, 43, 44, 45, 46, 47]);
    });
  });

  describe('pluck', () => {
    it('returns correct result', () => {
      const data = [
        { id: '1', name: 'foo' },
        { id: '2', name: 'bar' },
        { id: '3', name: 'baz' },
      ];
      expect(pluck(data, 'id')).toEqual(['1', '2', '3']);
    });
  });
});
