import app from './app'

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    global.ctx.log.info(`Magic Happens on port ${PORT}`)
})
