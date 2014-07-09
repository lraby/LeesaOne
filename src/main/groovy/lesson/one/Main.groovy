package lesson.one

import com.soulsys.g_serv.GServ

/**
 * Created by lcollins on 7/2/14.
 */
class Main {


	static void main(args){
		def gs = new GServ();
		gs.http {
			useResourceDocs(true)
			get("/", file("index.html"))
		}.start 12000
	}

}
