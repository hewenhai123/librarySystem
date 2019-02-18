/**
 * Created by Administrator on 2019/1/30 0030.
 */
var mongoose=require('mongoose');
var Genre = require('../models/genre');
const Book=require('../models/book');
const async=require('async');

// Display list of all Genre.
exports.genre_list = function (req, res,next) {
    Genre.find()
        .exec((err, list_genre) => {
            if (err) {
          return next(err);
            }
            // res.send({title: 'Genre list', list_genre: list_genre});
            res.render('genre_list', {title: 'Genre list', list_genre: list_genre})
        });


    // res.send('NOT IMPLEMENTED: Genre list');
};

// Display detail page for a specific Genre.
exports.genre_detail = function(req, res,next) {

    async.parallel({
       genre:(callback)=>{
           Genre.findById(req.params.id)
               .exec(callback);
       } ,
        genre_books:(callback)=>{
           const id=mongoose.Types.ObjectId(req.params.id);
           Book.find({"genre":id})
            .exec(callback)
        }
    },(err,results)=>{
        if(err){
            next(err);
        }
        if(results.genre==null){
            const err=new Error('Genre not found');
            err.status=404;
            return next(err)
        }
        res.render('genre_detail',{'title':'Genre Detail',genre:results.genre,genre_books:results.genre_books})

    });

};

// Display Genre create form on GET.
exports.genre_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre create GET');
};

// Handle Genre create on POST.
exports.genre_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre create POST');
};

// Display Genre delete form on GET.
exports.genre_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete GET');
};

// Handle Genre delete on POST.
exports.genre_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete POST');
};

// Display Genre update form on GET.
exports.genre_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre update GET');
};

// Handle Genre update on POST.
exports.genre_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre update POST');
};