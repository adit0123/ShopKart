//const { search } = require("../app");

class ApiFeatures{
    constructor(query,queryStr){
        this .query = query;
        this.queryStr = queryStr;
    }

    search(){
        const keyword = this.queryStr.keyword 
        ? {
            name:{
                $regex:this.queryStr.keyword,
                $options: "i",
            }, 
          }
        : {}; //when keyword is not given

        console.log(keyword);
        this.query = this.query.find({...keyword});
        return this;
     }

    filter(){
        
        const queryCopy = {...this.queryStr}
        //console.log(queryCopy);
        //Removing some fields for category
        const removeFeilds = ["keyword","page","limit"];

        removeFeilds.forEach(key=>delete queryCopy[key]); 
        //console.log(queryCopy);
        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g,key => `$${key}`);

       
        this.query = this.query.find(JSON.parse(queryStr));
        return this;

     }

     pagination(resultPerPage){
        const currentpage = this.queryStr.page || 1;

        const skip = resultPerPage * (currentpage-1);
        this.query = this.query.limit(resultPerPage).skip(skip)
        
        return this;
     }
}



module.exports = ApiFeatures;