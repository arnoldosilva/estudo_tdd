describe('Show HomeScreen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show home screen', async () => {
    await expect(element(by.id('home'))).toBeVisible();
  });

  it('should show home Hello World', async () => {
    await element(by.id('button')).tap();
    await expect(element(by.text('Hello World'))).toBeVisible()
  });
});
