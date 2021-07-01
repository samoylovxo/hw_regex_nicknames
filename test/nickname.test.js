/* eslint-disable linebreak-style */
import Validator from '../src/js/nickname';

test('Name is fit qweQwe', () => {
  expect(new Validator().validateUsername('qweQwe')).toEqual('Имя подходит');
});

test('Name is fit qWe-qwe', () => {
  expect(new Validator().validateUsername('qWe-qwe')).toEqual('Имя подходит');
});

test('Name is fit qwe_qwe', () => {
  expect(new Validator().validateUsername('qwe_qwe')).toEqual('Имя подходит');
});

test('Name is fit qwe-_qWE', () => {
  expect(new Validator().validateUsername('qwe-_qWE')).toEqual('Имя подходит');
});

test('Name is fit Qwe12qwe', () => {
  expect(new Validator().validateUsername('Qwe12qwe')).toEqual('Имя подходит');
});

test('Name no fit 2qwWqwe', () => {
  expect(() => new Validator().validateUsername('2qwWqwe')).toThrowError('Ошибка, имя не подходит');
});

test('Name no fit _qTe_qW1234e', () => {
  expect(() => new Validator().validateUsername('_qTe_qW1234e')).toThrowError('Ошибка, имя не подходит');
});

test('Name no fit qwEEq1234-_we', () => {
  expect(() => new Validator().validateUsername('qwEEq1234-_we')).toThrowError('Ошибка, имя не подходит');
});

test('Name no fit -qw22Qe-qwe', () => {
  expect(() => new Validator().validateUsername('-qw22Qe-qwe')).toThrowError('Ошибка, имя не подходит');
});

test('Name no fit qwEqwe-', () => {
  expect(() => new Validator().validateUsername('qwEqwe-')).toThrowError('Ошибка, имя не подходит');
});

test('Name no fit qw1qwe2', () => {
  expect(() => new Validator().validateUsername('qw1qwe2')).toThrowError('Ошибка, имя не подходит');
});

test('Name no fit 1qweqwe_', () => {
  expect(() => new Validator().validateUsername('1qweqwe_')).toThrowError('Ошибка, имя не подходит');
});

test('Name no fit 2qwEQwe-_', () => {
  expect(() => new Validator().validateUsername('2qwEQwe-_')).toThrowError('Ошибка, имя не подходит');
});
