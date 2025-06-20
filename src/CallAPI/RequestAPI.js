import  axios  from 'axios';

const BaseURL = "http://inertia-pos.manirul.xyz/api";
export async function expenseList() {
    let res = await axios.get(BaseURL + "/expense-list")
    if(res.status === 200){
        return res.data;
    }else{
        return [];
    }
}

//http://inertia-pos.manirul.xyz/api/card-list

export async function myCardList() {
    let res = await axios.get(BaseURL + "/card-list")
    if(res.status === 200){
        return res.data;
    }else{
        return [];
    }
}

export async function recentTransactionList() {
    let res = await axios.get(BaseURL + "/recent-transactions-list")
    if(res.status === 200){
        return res.data;
    }else{
        return [];
    }
}

//weekly-activity-list

export async function weeklyActivityList() {
    let res = await axios.get(BaseURL + "/weekly-activity-list")
    if(res.status === 200){
        return res.data;
    }else{
        return [];
    }
}

