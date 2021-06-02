if (window !== window.top) {
    return;
}

async function init() {
    console.log("init called")
    const provider = await fin.InterApplicationBus.Channel.create('hide-show');

    provider.register('hide-me', async (payload, identity) => {
        const platform = fin.Platform.getCurrentSync();
        const currentView = await fin.View.wrap(identity);
        const viewOptions = await currentView.getOptions();

        console.log(JSON.stringify(currentView));
        platform.closeView(identity);
    });

    provider.register('show-me', async (payload, identity) => {
        const platform = fin.Platform.getCurrentSync();
        const currentView = await fin.View.wrap(identity);
        const viewOptions = await currentView.getOptions();

        console.log(JSON.stringify(currentView));
        platform.createView(viewOptions, fin.me.identity);
    });
}

init();
