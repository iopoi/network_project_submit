/**
 * Created by nick on 5/7/17.
 */

const CDP = require('chrome-remote-interface');
i = 0;

//External arguments
const proc = require('process');
website = proc.argv[2]
// website = 'https://groups.google.com/a/chromium.org/forum/#!forum/proto-quic'
var emulating_network = proc.argv[3];
// var RTT = proc.argv[4]; // 100
// var dBW = proc.argv[5]; // 97500
// var uBW = proc.argv[6]; // 41250
// var network_type = proc.argv[7]; // cellular2g

// simulation of 2g network
// emulating_network = true;
RTT = 300;
dBW = 200000;
uBW = 100000;
network_type = 'cellular2g'

reloads = 50 - 2;
time_between_reloads = 5000; //ms

//Read and Write files
// var siteFile = path.resolve(__dirname, 'sites.txt');
// var metricFile = path.resolve(__dirname, 'plt.txt');

console.log('iteration' + ' ' + 'requestId' + ' ' + 'timestamp' + ' ' + 'event');


CDP(function(client) {
    // extract domains
    const {Network, Page} = client;
    // setup handlers
    // Network.requestWillBeSent((params) => {
    //     console.log('requestWillBeSent-' + "timestamp:"+params.timestamp + ",id:" + params.requestId + ",url:" + params.request.url + ";");
    // });
    // Network.responseReceived((params) => {
    //     console.log('responseReceived-' + "timestamp:"+params.timestamp + ",id:" + params.requestId + ",url:" + params.response.url + ";");
    // });
    // Network.dataReceived((params) => {
    //     console.log('dataReceived-' + "timestamp:"+params.timestamp + ",id:" + params.requestId + ";");
    // });
    // Network.loadingFinished((params) => {
    //     console.log('loadingFinished-' + "timestamp:"+params.timestamp + ",id:" + params.requestId + ";");
    // });
    // Network.webSocketWillSendHandshakeRequest((params) => {
    //     console.log('webSocketWillSendHandshakeRequest-' + "timestamp:"+params.timestamp + ",id:" + params.requestId + ";");
    // });


    Network.resourceChangedPriority((params) => {
        // console.log("{event: resourceChangedPriority, requestId: " + params.requestId + ", timestamp: " + params.timestamp + "}");
        params['event'] = 'resourceChangedPriority'
        params['iteration'] = i;
        // console.log(params);
        console.log(params['iteration'] + ' ' + params['requestId'] + ' ' + params['timestamp'] + ' ' + params['event']);
    });
    Network.requestWillBeSent((params) => {
        // console.log("{event: requestWillBeSent, requestId: " + params.requestId + ", timestamp: " + params.timestamp + "}");
        params['event'] = 'requestWillBeSent'
        params['iteration'] = i;
        // console.log(params);
        console.log(params['iteration'] + ' ' + params['requestId'] + ' ' + params['timestamp'] + ' ' + params['event']);
    });
    Network.requestServedFromCache((params) => {
        // console.log("{event: requestServedFromCache, requestId: " + params.requestId + ", timestamp: " + params.timestamp + "}");
        params['event'] = 'requestServedFromCache'
        params['iteration'] = i;
        // console.log(params);
        console.log(params['iteration'] + ' ' + params['requestId'] + ' ' + params['timestamp'] + ' ' + params['event']);
    });
    Network.responseReceived((params) => {
        // console.log("{event: responseReceived, requestId: " + params.requestId + ", timestamp: " + params.timestamp + "}");
        params['event'] = 'responseReceived'
        params['iteration'] = i;
        // console.log(params);
        console.log(params['iteration'] + ' ' + params['requestId'] + ' ' + params['timestamp'] + ' ' + params['event']);
    });
    Network.dataReceived((params) => {
        // console.log("{event: dataReceived, requestId: " + params.requestId + ", timestamp: " + params.timestamp + "}");
        params['event'] = 'dataReceived'
        params['iteration'] = i;
        // console.log(params);
        console.log(params['iteration'] + ' ' + params['requestId'] + ' ' + params['timestamp'] + ' ' + params['event']);
    });
    Network.loadingFinished((params) => {
        // console.log("{event: loadingFinished, requestId: " + params.requestId + ", timestamp: " + params.timestamp + "}");
        params['event'] = 'loadingFinished'
        params['iteration'] = i;
        // console.log(params);
        console.log(params['iteration'] + ' ' + params['requestId'] + ' ' + params['timestamp'] + ' ' + params['event']);
    });
    Network.loadingFailed((params) => {
        // console.log("{event: loadingFailed, requestId: " + params.requestId + ", timestamp: " + params.timestamp + "}");
        params['event'] = 'loadingFailed'
        params['iteration'] = i;
        // console.log(params);
        console.log(params['iteration'] + ' ' + params['requestId'] + ' ' + params['timestamp'] + ' ' + params['event']);
    });
    Network.webSocketWillSendHandshakeRequest((params) => {
        // console.log("{event: webSocketWillSendHandshakeRequest, requestId: " + params.requestId + ", timestamp: " + params.timestamp + "}");
        params['event'] = 'webSocketWillSendHandshakeRequest'
        params['iteration'] = i;
        // console.log(params);
        console.log(params['iteration'] + ' ' + params['requestId'] + ' ' + params['timestamp'] + ' ' + params['event']);
    });
    Network.webSocketHandshakeResponseReceived((params) => {
        // console.log("{event: webSocketHandshakeResponseReceived, requestId: " + params.requestId + ", timestamp: " + params.timestamp + "}");
        params['event'] = 'webSocketHandshakeResponseReceived'
        params['iteration'] = i;
        // console.log(params);
        console.log(params['iteration'] + ' ' + params['requestId'] + ' ' + params['timestamp'] + ' ' + params['event']);
    });
    Network.webSocketCreated((params) => {
        // console.log("{event: webSocketCreated, requestId: " + params.requestId + ", timestamp: " + params.timestamp + "}");
        params['event'] = 'webSocketCreated'
        params['iteration'] = i;
        // console.log(params);
        console.log(params['iteration'] + ' ' + params['requestId'] + ' ' + params['timestamp'] + ' ' + params['event']);
    });
    Network.webSocketClosed((params) => {
        // console.log("{event: webSocketClosed, requestId: " + params.requestId + ", timestamp: " + params.timestamp + "}");
        params['event'] = 'webSocketClosed'
        params['iteration'] = i;
        // console.log(params);
        console.log(params['iteration'] + ' ' + params['requestId'] + ' ' + params['timestamp'] + ' ' + params['event']);
    });
    Network.webSocketFrameReceived((params) => {
        // console.log("{event: webSocketFrameReceived, requestId: " + params.requestId + ", timestamp: " + params.timestamp + "}");
        params['event'] = 'webSocketFrameReceived'
        params['iteration'] = i;
        // console.log(params);
        console.log(params['iteration'] + ' ' + params['requestId'] + ' ' + params['timestamp'] + ' ' + params['event']);
    });
    Network.webSocketFrameError((params) => {
        // console.log("{event: webSocketFrameError, requestId: " + params.requestId + ", timestamp: " + params.timestamp + "}");
        params['event'] = 'webSocketFrameError'
        params['iteration'] = i;
        // console.log(params);
        console.log(params['iteration'] + ' ' + params['requestId'] + ' ' + params['timestamp'] + ' ' + params['event']);
    });
    Network.webSocketFrameSent((params) => {
        // console.log("{event: webSocketFrameSent, requestId: " + params.requestId + ", timestamp: " + params.timestamp + "}");
        params['event'] = 'webSocketFrameSent'
        params['iteration'] = i;
        // console.log(params);
        console.log(params['iteration'] + ' ' + params['requestId'] + ' ' + params['timestamp'] + ' ' + params['event']);
    });
    Network.eventSourceMessageReceived((params) => {
        // console.log("{event: eventSourceMessageReceived, requestId: " + params.requestId + ", timestamp: " + params.timestamp + "}");
        params['event'] = 'eventSourceMessageReceived'
        params['iteration'] = i;
        // console.log(params);
        console.log(params['iteration'] + ' ' + params['requestId'] + ' ' + params['timestamp'] + ' ' + params['event']);
    });


    Page.loadEventFired(() => {
        t = time_between_reloads; //This waits 2 seconds
        for (var temp = new Date(); new Date() - temp < t;);
        if(i > reloads){
            client.close()
        }
        i = i+1;
        Network.clearBrowserCache()
        // Network.clearBrowserCookies()

        Page.navigate({url: website});
        // client.close();
    });
    // enable events then start!
    Promise.all([
        Network.enable(),
        Page.enable()
    ]).then(() => {
        // return Page.navigate({url: 'https://docs.google.com/document/d/1QijvDEsbowNFBHwkt2aZG9vT9rgIHBJvYTL5ezu42k8/edit?usp=sharing'});
        // Page.navigate({url: 'https://www.google.com'});
        // return Page.navigate({url: 'https://www.google.com'});
        if(emulating_network){
            Network.emulateNetworkConditions({offline: false, latency: RTT, downloadThroughput: dBW, uploadThroughput: uBW, connectionType: network_type})
        }
    }).then(() => {
        // return Page.navigate({url: 'https://docs.google.com/document/d/1QijvDEsbowNFBHwkt2aZG9vT9rgIHBJvYTL5ezu42k8/edit?usp=sharing'});
        // Page.navigate({url: 'https://www.google.com'});
        // return Page.navigate({url: 'https://www.google.com'});
        return Page.navigate({url: website});
    }).catch((err) => {
        console.error(err);
    client.close();
    });
}).on('error', (err) => {
    // cannot connect to the remote endpoint
    console.error(err);
});