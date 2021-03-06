describe('test', () => {
  it('should work with empty url', async () => {
    const page = await puppy.newPage()
    await page.waitFor('.test')
    await page.close()
  })

  it('should work with index.html', async () => {
    const page = await puppy.newPage('index.html')
    await page.waitFor('.test')
    await page.close()
  })

  it('should work with /index.html', async () => {
    const page = await puppy.newPage('/index.html')
    await page.waitFor('.test')
    await page.close()
  })

  it('should work with localhost:8080', async () => {
    const page = await puppy.newPage('localhost:8080')
    await page.waitFor('.test')
    await page.close()
  })

  it('should work with localhost:8080/index.html', async () => {
    const page = await puppy.newPage('localhost:8080/index.html')
    await page.waitFor('.test')
    await page.close()
  })
})
