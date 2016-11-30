module.exports = {
     gattDefs: {
        service: [
            { name: 'dInServ', uuid: '0xbb00' },
            { name: 'aInServ', uuid: '0xbb10' },
            { name: 'weatherServ', uuid: '0xbb80' }
        ],
        characteristic: [
            { name: 'aInConfig', uuid: '0xbb11', params: ['config'], types: ['boolean'] },
            { name: 'aInMeasPeriod', uuid: '0xbb12', params: ['period'], types: ['uint8'] },
            { name: 'weatherConfig', uuid: '0xbb81', params: ['config'], types: ['boolean'] },
            { name: 'weatherMeasPeriod', uuid: '0xbb82', params: ['period'], types: ['uint8'] }
        ]
     },
     examine: function (periph, basicInfo) {
        var isMine = false;

        if (basicInfo.manufacturer === 'sivann' &&
            basicInfo.devName === 'Weather Station')
            isMine = true;

        return isMine;
    }
};
