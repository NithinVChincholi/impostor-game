import test from 'node:test';
import assert from 'node:assert/strict';
import {resolveVote,scoresFor,validClue,words} from './dist/engine.mjs';
test('majority and tied candidate restriction',()=>{assert.equal(resolveVote([1,1,2,0],[0,1,2,3]).winner,1);assert.deepEqual(resolveVote([0,1,0,1],[0,1]).tied,[0,1]);assert.equal(resolveVote([2,2,0,1],[0,1]).winner,null);});
test('scoring for caught, escaped and stalemate',()=>{assert.deepEqual(scoresFor(4,2,2),[20,20,0,20]);assert.deepEqual(scoresFor(4,2,1),[-10,-10,30,-10]);assert.deepEqual(scoresFor(4,2,null),[0,0,0,0]);});
test('reject blank, oversized and directly revealing clues',()=>{assert.equal(validClue('  ','Pizza'),false);assert.equal(validClue('PIZZA!','Pizza'),false);assert.equal(validClue('Fire-truck','Fire truck'),false);assert.equal(validClue('cheese','Pizza'),true);assert.equal(validClue('x'.repeat(61),'Pizza'),false);});
test('content covers a six-seat extra clue round',()=>{assert.ok(words.length>=15);for(const w of words){assert.ok(w.answer&&w.hint);assert.ok(w.clues.length>=6);assert.ok(w.clues.every(c=>validClue(c,w.answer)));}});
