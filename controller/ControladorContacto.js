module.exports=function(app){
	return {
		add:function(req,res){
			var pool=app.get('pool');
			pool.getConnection(function(err,connection){
					if(err){
						connection.release();
						respuesta.json({"code":100,"status":"Error al conectar a la base de datos"});
					}
				connection.query("INSERT INTO contacto VALUES(NULL,'"+req.body.nombre+"',"+req.body.telCasa+","+req.body.telMovil+",'"+req.body.correo+"','"+req.body.direccion+"');",function(err,rows){
					if(err)
						throw err;
					else
						res.json({"mensaje":"Contacto agregado"});
						connection.release();
				});
			});
		},
		
		list:function(req,res){
			var pool=app.get('pool');
			pool.getConnection(function(err,connection){
					if(err){
						connection.release();
						respuesta.json({"code":100,"status":"Error al conectar a la base de datos"});
					}
				connection.query("SELECT * FROM contacto WHERE id="+req.query.id,function(err,rows){
					if(err)
						throw err;
					else
						res.json(rows);
						connection.release();
				});
			});
		},
		delete:function(req,res){
			var pool=app.get('pool');
			pool.getConnection(function(err,connection){
					if(err){
						connection.relase();
						respuesta.json({"code":100,"status":"Error al conectar a la base de datos"});
					}
				connection.query("DELETE FROM contacto WHERE id="+req.query.id,function(err,rows){
					if(err)
						throw err;
					else
						res.json({"mensaje":"Contacto eliminado"});
						connection.release();
				});
			});
		},
		edit:function(req,res){
			var pool=app.get('pool');
			pool.getConnection(function(err,connection){
					if(err){
						connection.release();
						respuesta.json({"code":100,"status":"Error al conectar a la base de datos"});
					}
				connection.query("UPDATE contacto SET nombre='"+req.body.nombre+"',telCasa="+req.body.telCasa+",telMovil="+req.body.telMovil+",email='"+req.body.correo+"',direccion='"+req.body.direccion+"' WHERE id="+req.query.id+";",function(err,rows){
					if(err)
						throw err;
					else
						res.json({"mensaje":"Contacto editado"});
						connection.release();
				});
			});
		}
	}
}