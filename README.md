# automation

## Development

In one terminal start the firebase serve to proxy function calls

```
npm run start:firebase
```

Then in another terminal start the firestore emulator

```
npm run start:firestore
```

Then in another terminal start the development server

```
npm run start
```

Use the react boiler plate generator to create new components

```
npm run generate
```

To run the firestore rules tests

```
npm run test:firestore
```

## Deployment

To deploy to firebase

```
npm run deploy
```

To deploy only database rules

```
npm run deploy:database
```

To deploy only firestore rules

```
npm run deploy:firestore
```
