
let kPackageID = "rename.tracks.from.channels"
function userFunction()
{
	this.interfaces =  [Host.Interfaces.IEditTask]

	this.prepareEdit = function (context)
	{
		return Host.Results.kResultOk;
	}

	// ------------------------------------------

	this.performEdit = function (context)
	{
		let trackList = context.mainTrackList;

		let functions = context.functions;
		functions.executeImmediately = true
		
		for(i=0;i<trackList.numTracks;i++)
		{
			let track = trackList.getTrack(i)
			let channel = track.channel

			if(channel && channel.channelType == "MusicTrack")
			{ 
				var name = channel.findParameter("instrumentOutput").string

				if (name)
					functions.renameEvent(track, name);
			}
		}
		return Host.Results.kResultOk;
	}

	// ---------------------------------------

	 this.paramChanged = function (param)
    { 
		  
	}
}

function createInstance()
{
	return new userFunction();
	
}

