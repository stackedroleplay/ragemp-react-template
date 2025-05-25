let uiBrowser = {
    browser: null,
    active: false,
    cooldown: 0,
    pendingData: null
};

mp.events.add('C:ui:show', (data) => { // maybe triggered by a server or client
    if (uiBrowser.active) {
        uiBrowser.browser.destroy();
        uiBrowser.browser = null;
        uiBrowser.active = false;
        mp.gui.cursor.show(false, false);
    } else {
        uiBrowser.browser = mp.browsers.new('package://ui/dist/index.html');
        uiBrowser.active = true;
        uiBrowser.pendingData = data; // till now ui is not ready or render
        mp.gui.cursor.show(true, true);
    }
});

mp.events.add('C:ui:reactReady', () => {
    if (uiBrowser.browser && uiBrowser.pendingData) { // send data to the CEF
        const serializedData = JSON.stringify(uiBrowser.pendingData);
        uiBrowser.browser.execute(`window.changeCount(${serializedData})`);
        uiBrowser.pendingData = null;
    }
});