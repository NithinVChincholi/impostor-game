# Impostor — current game draft

## Concept and appearance
The header logo uses the approved three overlapping cards beside IMPOSTOR: two forest-green diamond cards and a burgundy question-mark card, with gold double borders.
A social word game for 4–6 people. Everyone gets the same secret word except one impostor, who gets a broad category hint and knows their role. Everyone checks their card first; players then say related words, discuss, and vote.

All seats use the same anonymous shadow figure wearing glasses and holding face-down cards. Faces and skin tones are hidden. Keep the background consistent. Seat labels default to Player 1, Player 2, etc.; entering a name replaces the label. The visual draft uses a dark forest-green background, warm lamp lighting, burgundy cards, ivory text and gold details. The dark theme applies to the table, player cards, inputs, discussion, voting and rules dialog.

## Round flow
1. Choose 4, 5 or 6 seats; enter optional player names.
2. Deal one random impostor role. Privately reveal a card to each human player. The team sees the secret answer; the impostor sees only the broad hint.
3. After everyone has checked their card, explicitly start the related-word round. Each player can say any word or phrase related to their secret word: for Bus, wheels, children, or school. Entries display publicly beside the player’s name. Four players get two word rounds; five or six get three.
4. Open a shared meeting for discussing suspicions.
5. Vote privately. No voting for yourself. The player with the most votes is accused.
6. Reveal the impostor, answer, hint, votes and point changes.
7. Deal a new word and random roles; retain session scores.

## Ties and scores
- First tie: revote only among the tied players.
- Second tie: everyone gives one extra clue, then vote among the tied candidates.
- Third tie: everyone receives zero and a fresh game can begin.
- Correct accusation: each team member earns 20 points.
- Wrong accusation: each team member loses 10; the impostor earns 30.
- Provisional implementation default: a caught impostor earns zero. This was left open in the original discussion.

## Words
Use familiar foods, animals, places, sports, common vehicles and everyday objects. Examples: ambulance / vehicle; pizza / food; jungle / place. Avoid obscure trivia or specialist knowledge. A future actor-name pack should match players' region and language. The prototype includes 19 everyday answers and avoids repeating an answer until the pack is exhausted.

## Included in the first playable draft
- Responsive player cards with generated shadow artwork, editable names and active-seat indication.
- Solo mode with scripted practice bots, not a live language model.
- Friends on one device using pass-and-play; others must look away for cards and votes.
- Private role modal, clue ledger, discussion notes, voting, tie-breaks, result reveal and session scores.
- Scores and game state are in memory and reset on page reload.

## Later work
- Online rooms with server-side secret roles, join codes, reconnect support and shared state.
- More varied bot behavior and larger word packs.
- Optional character/card animations beyond the current role-card flip.
- Accessibility and multi-device gameplay testing before calling this a finished release.

## Artwork
Built-in image generation created `dist/player-shadow.png`. Final prompt: a completely black anonymous human silhouette wearing round glasses, holding three face-down burgundy cards, in a softly lit forest-green room; realistic cinematic rendering; no visible facial features, skin tone, words, logos or watermark.

## Verification
Engine tests cover vote counting, tied-candidate restriction, caught/escaped/stalemate scores, secret-answer clue rejection and the word pack. Full browser flow still needs verification in the live preview.
