import {Timeline as TimelineNS} from './api/API';
import Login from './api/Login';
import WatchingList from './api/WatchingList';
import Timeline from './api/timeline';
import Watched from './api/Watched';
import {getCookies} from './request';

Login.request("YOUR_USER_NAME", "YOUR_PASSWORD").then(ret => {
    console.log("Login successfully");
    
    /**
     * 时间线示例
     */
    Timeline.request(TimelineNS.Type.Say).then(d => console.log(d)).catch(d => console.log(d));
    
    /**
     * 获取正在观看的列表示例
     */
    WatchingList.request().then(d => {
        console.log(d);
        /**
         * 如果你观看的列表里有《迷家》的话，把【已观看】设置到第九集。
         */
        let watchingList = d.watching.filter(obj => obj.id === "163046");
        if (watchingList.length === 0) return null;
        let watching = watchingList[0];
        let epId = watching.ep.map(ep => ep.id).filter(id => parseInt(id) <= 613775);
        return Watched.request(epId, d.gh);
    }).then(d => console.log(d)).catch(e => console.log(e));
    
}).catch(ret => console.log(ret)); //"登录失败！"));