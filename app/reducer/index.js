/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-05-27 00:16:08 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-06-03 22:29:33
 */
import { combineReducers } from 'redux';
import counter from './counter';
import windowSize from './windowSize'

export default combineReducers({
  counter,
  windowSize
});