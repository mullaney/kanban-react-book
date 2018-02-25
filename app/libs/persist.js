export default function(alt, storage, storageName) {
  try {
    alt.bootstrap(storage.get(storageName))
  }
  catch (err) {
    console.error('failed to bootstrap data', err)
  }

  alt.FinalStore.listen(() => {
    if (!storage.get('debug')) {
      storage.set(storageName, alt.takeSnapshot())
    }
  })
}