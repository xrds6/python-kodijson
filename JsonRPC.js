JsonRPC={
	"description": "JSON-RPC API of XBMC",
	"id": "http://xbmc.org/jsonrpc/ServiceDescription.json",
	"methods": {
		"Addons.ExecuteAddon": {
			"description": "Executes the given addon with the given parameters (if possible)",
			"params": [
				{
					"name": "addonid",
					"required": true,
					"type": "string"
				},
				{
					"default": "",
					"name": "params",
					"type": [
						{
							"additionalProperties": {
								"default": "",
								"type": "string"
							},
							"type": "object"
						},
						{
							"items": {
								"type": "string"
							},
							"type": "array"
						},
						{
							"description": "URL path (must start with / or ?",
							"type": "string"
						}
					]
				},
				{
					"default": false,
					"name": "wait",
					"type": "boolean"
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Addons.GetAddonDetails": {
			"description": "Gets the details of a specific addon",
			"params": [
				{
					"name": "addonid",
					"required": true,
					"type": "string"
				},
				{
					"$ref": "Addon.Fields",
					"name": "properties"
				}
			],
			"returns": {
				"properties": {
					"addon": {
						"$ref": "Addon.Details",
						"required": true
					},
					"limits": {
						"$ref": "List.LimitsReturned",
						"required": true
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"Addons.GetAddons": {
			"description": "Gets all available addons",
			"params": [
				{
					"$ref": "Addon.Types",
					"default": "unknown",
					"name": "type"
				},
				{
					"$ref": "Addon.Content",
					"default": "unknown",
					"description": "Content provided by the addon. Only considered for plugins and scripts.",
					"name": "content"
				},
				{
					"default": "all",
					"name": "enabled",
					"type": [
						{
							"type": "boolean"
						},
						{
							"enums": [
								"all"
							],
							"type": "string"
						}
					]
				},
				{
					"$ref": "Addon.Fields",
					"name": "properties"
				},
				{
					"$ref": "List.Limits",
					"name": "limits"
				},
				{
					"default": true,
					"name": "installed",
					"type": [
						{
							"type": "boolean"
						},
						{
							"enums": [
								"all"
							],
							"type": "string"
						}
					]
				}
			],
			"returns": {
				"properties": {
					"addons": {
						"items": {
							"$ref": "Addon.Details"
						},
						"type": "array"
					},
					"limits": {
						"$ref": "List.LimitsReturned",
						"required": true
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"Addons.SetAddonEnabled": {
			"description": "Enables/Disables a specific addon",
			"params": [
				{
					"name": "addonid",
					"required": true,
					"type": "string"
				},
				{
					"$ref": "Global.Toggle",
					"name": "enabled",
					"required": true
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Application.GetProperties": {
			"description": "Retrieves the values of the given properties",
			"params": [
				{
					"items": {
						"$ref": "Application.Property.Name"
					},
					"name": "properties",
					"required": true,
					"type": "array",
					"uniqueItems": true
				}
			],
			"returns": {
				"$ref": "Application.Property.Value"
			},
			"type": "method"
		},
		"Application.Quit": {
			"description": "Quit application",
			"params": [

			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Application.SetMute": {
			"description": "Toggle mute/unmute",
			"params": [
				{
					"$ref": "Global.Toggle",
					"name": "mute",
					"required": true
				}
			],
			"returns": {
				"description": "Mute state",
				"type": "boolean"
			},
			"type": "method"
		},
		"Application.SetVolume": {
			"description": "Set the current volume",
			"params": [
				{
					"name": "volume",
					"required": true,
					"type": [
						{
							"maximum": 100,
							"minimum": 0,
							"type": "integer"
						},
						{
							"$ref": "Global.IncrementDecrement"
						}
					]
				}
			],
			"returns": {
				"type": "integer"
			},
			"type": "method"
		},
		"AudioLibrary.Clean": {
			"description": "Cleans the audio library from non-existent items",
			"params": [
				{
					"default": true,
					"description": "Whether or not to show the progress bar or any other GUI dialog",
					"name": "showdialogs",
					"type": "boolean"
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"AudioLibrary.Export": {
			"description": "Exports all items from the audio library",
			"params": [
				{
					"name": "options",
					"type": [
						{
							"additionalProperties": false,
							"properties": {
								"path": {
									"description": "Path to the directory to where the data should be exported",
									"minLength": 1,
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"images": {
									"default": false,
									"description": "Whether to export thumbnails and fanart images",
									"type": "boolean"
								},
								"overwrite": {
									"default": false,
									"description": "Whether to overwrite existing exported files",
									"type": "boolean"
								}
							},
							"type": "object"
						}
					]
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"AudioLibrary.GetAlbumDetails": {
			"description": "Retrieve details about a specific album",
			"params": [
				{
					"$ref": "Library.Id",
					"name": "albumid",
					"required": true
				},
				{
					"$ref": "Audio.Fields.Album",
					"name": "properties"
				}
			],
			"returns": {
				"properties": {
					"albumdetails": {
						"$ref": "Audio.Details.Album"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"AudioLibrary.GetAlbums": {
			"description": "Retrieve all albums from specified artist (and role) or that has songs of the specified genre",
			"params": [
				{
					"$ref": "Audio.Fields.Album",
					"name": "properties"
				},
				{
					"$ref": "List.Limits",
					"name": "limits"
				},
				{
					"$ref": "List.Sort",
					"name": "sort"
				},
				{
					"name": "filter",
					"type": [
						{
							"additionalProperties": false,
							"properties": {
								"genreid": {
									"$ref": "Library.Id",
									"description": "Song genre. Filter for existance of songs with this genre",
									"required": true
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"genre": {
									"description": "Song genre. Filter for existance of songs with this genre",
									"minLength": 1,
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"artistid": {
									"$ref": "Library.Id",
									"required": true
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"artistid": {
									"$ref": "Library.Id",
									"required": true
								},
								"roleid": {
									"$ref": "Library.Id",
									"required": true
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"artistid": {
									"$ref": "Library.Id",
									"required": true
								},
								"role": {
									"minLength": 1,
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"artist": {
									"minLength": 1,
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"artist": {
									"minLength": 1,
									"required": true,
									"type": "string"
								},
								"roleid": {
									"$ref": "Library.Id",
									"required": true
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"artist": {
									"minLength": 1,
									"required": true,
									"type": "string"
								},
								"role": {
									"minLength": 1,
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						},
						{
							"$ref": "List.Filter.Albums"
						}
					]
				},
				{
					"default": false,
					"name": "includesingles",
					"type": "boolean"
				},
				{
					"default": false,
					"description": "Whether or not to include all roles when filtering by artist, rather than the default of excluding other contributions. When true it overrides any role filter value.",
					"name": "allroles",
					"type": "boolean"
				}
			],
			"returns": {
				"properties": {
					"albums": {
						"items": {
							"$ref": "Audio.Details.Album"
						},
						"type": "array"
					},
					"limits": {
						"$ref": "List.LimitsReturned",
						"required": true
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"AudioLibrary.GetArtistDetails": {
			"description": "Retrieve details about a specific artist",
			"params": [
				{
					"$ref": "Library.Id",
					"name": "artistid",
					"required": true
				},
				{
					"$ref": "Audio.Fields.Artist",
					"name": "properties"
				}
			],
			"returns": {
				"properties": {
					"artistdetails": {
						"$ref": "Audio.Details.Artist"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"AudioLibrary.GetArtists": {
			"description": "Retrieve all artists. For backward compatibility by default this implicity does not include those that only contribute other roles, however absolutely all artists can be returned using allroles=true",
			"params": [
				{
					"$ref": "Optional.Boolean",
					"default": null,
					"description": "Whether or not to only include album artists rather than the artists of only individual songs as well. If the parameter is not passed or is passed as null the GUI setting will be used",
					"name": "albumartistsonly"
				},
				{
					"$ref": "Audio.Fields.Artist",
					"name": "properties"
				},
				{
					"$ref": "List.Limits",
					"name": "limits"
				},
				{
					"$ref": "List.Sort",
					"name": "sort"
				},
				{
					"name": "filter",
					"type": [
						{
							"additionalProperties": false,
							"properties": {
								"genreid": {
									"$ref": "Library.Id",
									"description": "Deprecated, use songgenreid. Filter for existance of songs with this genre",
									"required": true
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"songgenreid": {
									"$ref": "Library.Id",
									"description": "Song genreid. Filter for existance of songs with this genre",
									"required": true
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"roleid": {
									"$ref": "Library.Id",
									"required": true
								},
								"songgenreid": {
									"$ref": "Library.Id",
									"required": true
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"role": {
									"minLength": 1,
									"required": true,
									"type": "string"
								},
								"songgenreid": {
									"$ref": "Library.Id",
									"required": true
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"genre": {
									"description": "Deprecated, use songgenre. Filter for existance of songs with this genre",
									"minLength": 1,
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"songgenre": {
									"description": "Song genre. Filter for existance of songs with this genre",
									"minLength": 1,
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"roleid": {
									"$ref": "Library.Id",
									"required": true
								},
								"songgenre": {
									"minLength": 1,
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"role": {
									"minLength": 1,
									"required": true,
									"type": "string"
								},
								"songgenre": {
									"minLength": 1,
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"albumid": {
									"$ref": "Library.Id",
									"required": true
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"album": {
									"minLength": 1,
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"songid": {
									"$ref": "Library.Id",
									"required": true
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"roleid": {
									"$ref": "Library.Id",
									"required": true
								},
								"songid": {
									"$ref": "Library.Id",
									"required": true
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"role": {
									"minLength": 1,
									"required": true,
									"type": "string"
								},
								"songid": {
									"$ref": "Library.Id",
									"required": true
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"roleid": {
									"$ref": "Library.Id",
									"description": "Role contributed by artist. Overriden by allroles parameter",
									"required": true
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"role": {
									"description": "Role contributed by artist. Overriden by allroles parameter",
									"minLength": 1,
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						},
						{
							"$ref": "List.Filter.Artists"
						}
					]
				},
				{
					"default": false,
					"description": "Whether or not to include all artists irrespective of the role they contributed. When true it overrides any role filter value.",
					"name": "allroles",
					"type": "boolean"
				}
			],
			"returns": {
				"properties": {
					"artists": {
						"items": {
							"$ref": "Audio.Details.Artist"
						},
						"type": "array"
					},
					"limits": {
						"$ref": "List.LimitsReturned",
						"required": true
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"AudioLibrary.GetGenres": {
			"description": "Retrieve all genres",
			"params": [
				{
					"$ref": "Library.Fields.Genre",
					"name": "properties"
				},
				{
					"$ref": "List.Limits",
					"name": "limits"
				},
				{
					"$ref": "List.Sort",
					"name": "sort"
				}
			],
			"returns": {
				"properties": {
					"genres": {
						"items": {
							"$ref": "Library.Details.Genre"
						},
						"required": true,
						"type": "array"
					},
					"limits": {
						"$ref": "List.LimitsReturned",
						"required": true
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"AudioLibrary.GetProperties": {
			"description": "Retrieves the values of the music library properties",
			"params": [
				{
					"items": {
						"$ref": "Audio.Property.Name"
					},
					"name": "properties",
					"required": true,
					"type": "array",
					"uniqueItems": true
				}
			],
			"returns": {
				"$ref": "Audio.Property.Value"
			},
			"type": "method"
		},
		"AudioLibrary.GetRecentlyAddedAlbums": {
			"description": "Retrieve recently added albums",
			"params": [
				{
					"$ref": "Audio.Fields.Album",
					"name": "properties"
				},
				{
					"$ref": "List.Limits",
					"name": "limits"
				},
				{
					"$ref": "List.Sort",
					"name": "sort"
				}
			],
			"returns": {
				"properties": {
					"albums": {
						"items": {
							"$ref": "Audio.Details.Album"
						},
						"type": "array"
					},
					"limits": {
						"$ref": "List.LimitsReturned",
						"required": true
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"AudioLibrary.GetRecentlyAddedSongs": {
			"description": "Retrieve recently added songs",
			"params": [
				{
					"$ref": "List.Amount",
					"default": -1,
					"description": "The amount of recently added albums from which to return the songs",
					"name": "albumlimit"
				},
				{
					"$ref": "Audio.Fields.Song",
					"name": "properties"
				},
				{
					"$ref": "List.Limits",
					"name": "limits"
				},
				{
					"$ref": "List.Sort",
					"name": "sort"
				}
			],
			"returns": {
				"properties": {
					"limits": {
						"$ref": "List.LimitsReturned",
						"required": true
					},
					"songs": {
						"items": {
							"$ref": "Audio.Details.Song"
						},
						"type": "array"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"AudioLibrary.GetRecentlyPlayedAlbums": {
			"description": "Retrieve recently played albums",
			"params": [
				{
					"$ref": "Audio.Fields.Album",
					"name": "properties"
				},
				{
					"$ref": "List.Limits",
					"name": "limits"
				},
				{
					"$ref": "List.Sort",
					"name": "sort"
				}
			],
			"returns": {
				"properties": {
					"albums": {
						"items": {
							"$ref": "Audio.Details.Album"
						},
						"type": "array"
					},
					"limits": {
						"$ref": "List.LimitsReturned",
						"required": true
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"AudioLibrary.GetRecentlyPlayedSongs": {
			"description": "Retrieve recently played songs",
			"params": [
				{
					"$ref": "Audio.Fields.Song",
					"name": "properties"
				},
				{
					"$ref": "List.Limits",
					"name": "limits"
				},
				{
					"$ref": "List.Sort",
					"name": "sort"
				}
			],
			"returns": {
				"properties": {
					"limits": {
						"$ref": "List.LimitsReturned",
						"required": true
					},
					"songs": {
						"items": {
							"$ref": "Audio.Details.Song"
						},
						"type": "array"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"AudioLibrary.GetRoles": {
			"description": "Retrieve all contributor roles",
			"params": [
				{
					"$ref": "Audio.Fields.Role",
					"name": "properties"
				},
				{
					"$ref": "List.Limits",
					"name": "limits"
				},
				{
					"$ref": "List.Sort",
					"name": "sort"
				}
			],
			"returns": {
				"properties": {
					"limits": {
						"$ref": "List.LimitsReturned",
						"required": true
					},
					"roles": {
						"items": {
							"$ref": "Audio.Details.Role"
						},
						"required": true,
						"type": "array"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"AudioLibrary.GetSongDetails": {
			"description": "Retrieve details about a specific song",
			"params": [
				{
					"$ref": "Library.Id",
					"name": "songid",
					"required": true
				},
				{
					"$ref": "Audio.Fields.Song",
					"name": "properties"
				}
			],
			"returns": {
				"properties": {
					"songdetails": {
						"$ref": "Audio.Details.Song"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"AudioLibrary.GetSongs": {
			"description": "Retrieve all songs from specified album, artist or genre",
			"params": [
				{
					"$ref": "Audio.Fields.Song",
					"name": "properties"
				},
				{
					"$ref": "List.Limits",
					"name": "limits"
				},
				{
					"$ref": "List.Sort",
					"name": "sort"
				},
				{
					"name": "filter",
					"type": [
						{
							"additionalProperties": false,
							"properties": {
								"genreid": {
									"$ref": "Library.Id",
									"description": "Song genre. Filter for existance of songs with this genre",
									"required": true
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"genre": {
									"description": "Song genre. Filter for existance of songs with this genre",
									"minLength": 1,
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"artistid": {
									"$ref": "Library.Id",
									"required": true
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"artistid": {
									"$ref": "Library.Id",
									"required": true
								},
								"roleid": {
									"$ref": "Library.Id",
									"required": true
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"artistid": {
									"$ref": "Library.Id",
									"required": true
								},
								"role": {
									"minLength": 1,
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"artist": {
									"minLength": 1,
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"artist": {
									"minLength": 1,
									"required": true,
									"type": "string"
								},
								"roleid": {
									"$ref": "Library.Id",
									"required": true
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"artist": {
									"minLength": 1,
									"required": true,
									"type": "string"
								},
								"role": {
									"minLength": 1,
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"albumid": {
									"$ref": "Library.Id",
									"required": true
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"album": {
									"minLength": 1,
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						},
						{
							"$ref": "List.Filter.Songs"
						}
					]
				},
				{
					"default": true,
					"name": "includesingles",
					"type": "boolean"
				},
				{
					"default": false,
					"description": "Whether or not to include all roles when filtering by artist, rather than default of excluding other contributors. When true it overrides any role filter value.",
					"name": "allroles",
					"type": "boolean"
				}
			],
			"returns": {
				"properties": {
					"limits": {
						"$ref": "List.LimitsReturned",
						"required": true
					},
					"songs": {
						"items": {
							"$ref": "Audio.Details.Song"
						},
						"type": "array"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"AudioLibrary.Scan": {
			"description": "Scans the audio sources for new library items",
			"params": [
				{
					"default": "",
					"name": "directory",
					"type": "string"
				},
				{
					"default": true,
					"description": "Whether or not to show the progress bar or any other GUI dialog",
					"name": "showdialogs",
					"type": "boolean"
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"AudioLibrary.SetAlbumDetails": {
			"description": "Update the given album with the given details",
			"params": [
				{
					"$ref": "Library.Id",
					"name": "albumid",
					"required": true
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "title"
				},
				{
					"default": null,
					"name": "artist",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Array.String"
						}
					]
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "description"
				},
				{
					"default": null,
					"name": "genre",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Array.String"
						}
					]
				},
				{
					"default": null,
					"name": "theme",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Array.String"
						}
					]
				},
				{
					"default": null,
					"name": "mood",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Array.String"
						}
					]
				},
				{
					"default": null,
					"name": "style",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Array.String"
						}
					]
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "type"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "albumlabel"
				},
				{
					"$ref": "Optional.Number",
					"default": null,
					"name": "rating"
				},
				{
					"$ref": "Optional.Integer",
					"default": null,
					"name": "year"
				},
				{
					"$ref": "Optional.Integer",
					"default": null,
					"name": "userrating"
				},
				{
					"$ref": "Optional.Integer",
					"default": null,
					"name": "votes"
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"AudioLibrary.SetArtistDetails": {
			"description": "Update the given artist with the given details",
			"params": [
				{
					"$ref": "Library.Id",
					"name": "artistid",
					"required": true
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "artist"
				},
				{
					"default": null,
					"name": "instrument",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Array.String"
						}
					]
				},
				{
					"default": null,
					"name": "style",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Array.String"
						}
					]
				},
				{
					"default": null,
					"name": "mood",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Array.String"
						}
					]
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "born"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "formed"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "description"
				},
				{
					"default": null,
					"name": "genre",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Array.String"
						}
					]
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "died"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "disbanded"
				},
				{
					"default": null,
					"name": "yearsactive",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Array.String"
						}
					]
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"AudioLibrary.SetSongDetails": {
			"description": "Update the given song with the given details",
			"params": [
				{
					"$ref": "Library.Id",
					"name": "songid",
					"required": true
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "title"
				},
				{
					"default": null,
					"name": "artist",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Array.String"
						}
					]
				},
				{
					"default": null,
					"name": "albumartist",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Array.String"
						}
					]
				},
				{
					"default": null,
					"name": "genre",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Array.String"
						}
					]
				},
				{
					"$ref": "Optional.Integer",
					"default": null,
					"name": "year"
				},
				{
					"$ref": "Optional.Number",
					"default": null,
					"name": "rating"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "album"
				},
				{
					"$ref": "Optional.Integer",
					"default": null,
					"name": "track"
				},
				{
					"$ref": "Optional.Integer",
					"default": null,
					"name": "disc"
				},
				{
					"$ref": "Optional.Integer",
					"default": null,
					"name": "duration"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "comment"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "musicbrainztrackid"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "musicbrainzartistid"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "musicbrainzalbumid"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "musicbrainzalbumartistid"
				},
				{
					"$ref": "Optional.Integer",
					"default": null,
					"name": "playcount"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "lastplayed"
				},
				{
					"$ref": "Optional.Integer",
					"default": null,
					"name": "userrating"
				},
				{
					"$ref": "Optional.Integer",
					"default": null,
					"name": "votes"
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Favourites.AddFavourite": {
			"description": "Add a favourite with the given details",
			"params": [
				{
					"name": "title",
					"required": true,
					"type": "string"
				},
				{
					"$ref": "Favourite.Type",
					"name": "type",
					"required": true
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"description": "Required for media and script favourites types",
					"name": "path"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"description": "Required for window favourite type",
					"name": "window"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "windowparameter"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "thumbnail"
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Favourites.GetFavourites": {
			"description": "Retrieve all favourites",
			"params": [
				{
					"default": null,
					"name": "type",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Favourite.Type"
						}
					]
				},
				{
					"$ref": "Favourite.Fields.Favourite",
					"name": "properties"
				}
			],
			"returns": {
				"properties": {
					"favourites": {
						"items": {
							"$ref": "Favourite.Details.Favourite"
						},
						"type": "array"
					},
					"limits": {
						"$ref": "List.LimitsReturned",
						"required": true
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"Files.GetDirectory": {
			"description": "Get the directories and files in the given directory",
			"params": [
				{
					"name": "directory",
					"required": true,
					"type": "string"
				},
				{
					"$ref": "Files.Media",
					"default": "files",
					"name": "media"
				},
				{
					"$ref": "List.Fields.Files",
					"name": "properties"
				},
				{
					"$ref": "List.Sort",
					"name": "sort"
				},
				{
					"$ref": "List.Limits",
					"description": "Limits are applied after getting the directory content thus retrieval is not faster when they are applied.",
					"name": "limits"
				}
			],
			"returns": {
				"properties": {
					"files": {
						"items": {
							"$ref": "List.Item.File"
						},
						"required": true,
						"type": "array"
					},
					"limits": {
						"$ref": "List.LimitsReturned",
						"required": true
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"Files.GetFileDetails": {
			"description": "Get details for a specific file",
			"params": [
				{
					"description": "Full path to the file",
					"name": "file",
					"required": true,
					"type": "string"
				},
				{
					"$ref": "Files.Media",
					"default": "files",
					"name": "media"
				},
				{
					"$ref": "List.Fields.Files",
					"name": "properties"
				}
			],
			"returns": {
				"properties": {
					"filedetails": {
						"$ref": "List.Item.File",
						"required": true
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"Files.GetSources": {
			"description": "Get the sources of the media windows",
			"params": [
				{
					"$ref": "Files.Media",
					"name": "media",
					"required": true
				},
				{
					"$ref": "List.Limits",
					"name": "limits"
				},
				{
					"$ref": "List.Sort",
					"name": "sort"
				}
			],
			"returns": {
				"properties": {
					"limits": {
						"$ref": "List.LimitsReturned",
						"required": true
					},
					"sources": {
						"$ref": "List.Items.Sources",
						"required": true
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"Files.PrepareDownload": {
			"description": "Provides a way to download a given file (e.g. providing an URL to the real file location)",
			"params": [
				{
					"name": "path",
					"required": true,
					"type": "string"
				}
			],
			"returns": {
				"properties": {
					"details": {
						"description": "Transport specific details on how/from where to download the given file",
						"required": true,
						"type": "any"
					},
					"mode": {
						"description": "Direct mode allows using Files.Download whereas redirect mode requires the usage of a different protocol",
						"enums": [
							"redirect",
							"direct"
						],
						"required": true,
						"type": "string"
					},
					"protocol": {
						"enums": [
							"http"
						],
						"required": true,
						"type": "string"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"Files.SetFileDetails": {
			"description": "Update the given specific file with the given details",
			"params": [
				{
					"description": "Full path to the file",
					"name": "file",
					"required": true,
					"type": "string"
				},
				{
					"$ref": "Files.Media",
					"description": "File type to update correct database. Currently only \"video\" is supported.",
					"name": "media",
					"required": true
				},
				{
					"$ref": "Optional.Integer",
					"default": null,
					"name": "playcount"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"description": "Setting a valid lastplayed without a playcount will force playcount to 1.",
					"name": "lastplayed"
				},
				{
					"default": null,
					"name": "resume",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Video.Resume"
						}
					]
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"GUI.ActivateWindow": {
			"description": "Activates the given window",
			"params": [
				{
					"$ref": "GUI.Window",
					"name": "window",
					"required": true
				},
				{
					"items": {
						"minLength": 1,
						"type": "string"
					},
					"minItems": 1,
					"name": "parameters",
					"type": "array"
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"GUI.GetProperties": {
			"description": "Retrieves the values of the given properties",
			"params": [
				{
					"items": {
						"$ref": "GUI.Property.Name"
					},
					"name": "properties",
					"required": true,
					"type": "array",
					"uniqueItems": true
				}
			],
			"returns": {
				"$ref": "GUI.Property.Value"
			},
			"type": "method"
		},
		"GUI.GetStereoscopicModes": {
			"description": "Returns the supported stereoscopic modes of the GUI",
			"params": [

			],
			"returns": {
				"properties": {
					"stereoscopicmodes": {
						"items": {
							"$ref": "GUI.Stereoscopy.Mode"
						},
						"type": "array",
						"uniqueItems": true
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"GUI.SetFullscreen": {
			"description": "Toggle fullscreen/GUI",
			"params": [
				{
					"$ref": "Global.Toggle",
					"name": "fullscreen",
					"required": true
				}
			],
			"returns": {
				"description": "Fullscreen state",
				"type": "boolean"
			},
			"type": "method"
		},
		"GUI.SetStereoscopicMode": {
			"description": "Sets the stereoscopic mode of the GUI to the given mode",
			"params": [
				{
					"enums": [
						"toggle",
						"tomono",
						"next",
						"previous",
						"select",
						"off",
						"split_vertical",
						"split_horizontal",
						"row_interleaved",
						"hardware_based",
						"anaglyph_cyan_red",
						"anaglyph_green_magenta",
						"monoscopic"
					],
					"name": "mode",
					"required": true,
					"type": "string"
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"GUI.ShowNotification": {
			"description": "Shows a GUI notification",
			"params": [
				{
					"name": "title",
					"required": true,
					"type": "string"
				},
				{
					"name": "message",
					"required": true,
					"type": "string"
				},
				{
					"default": "",
					"name": "image",
					"type": [
						{
							"enums": [
								"info",
								"warning",
								"error"
							],
							"type": "string"
						},
						{
							"type": "string"
						}
					]
				},
				{
					"default": 5000,
					"description": "The time in milliseconds the notification will be visible",
					"minimum": 1500,
					"name": "displaytime",
					"type": "integer"
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Input.Back": {
			"description": "Goes back in GUI",
			"params": [

			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Input.ContextMenu": {
			"description": "Shows the context menu",
			"params": [

			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Input.Down": {
			"description": "Navigate down in GUI",
			"params": [

			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Input.ExecuteAction": {
			"description": "Execute a specific action",
			"params": [
				{
					"$ref": "Input.Action",
					"name": "action",
					"required": true
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Input.Home": {
			"description": "Goes to home window in GUI",
			"params": [

			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Input.Info": {
			"description": "Shows the information dialog",
			"params": [

			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Input.Left": {
			"description": "Navigate left in GUI",
			"params": [

			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Input.Right": {
			"description": "Navigate right in GUI",
			"params": [

			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Input.Select": {
			"description": "Select current item in GUI",
			"params": [

			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Input.SendText": {
			"description": "Send a generic (unicode) text",
			"params": [
				{
					"description": "Unicode text",
					"name": "text",
					"required": true,
					"type": "string"
				},
				{
					"default": true,
					"description": "Whether this is the whole input or not (closes an open input dialog if true).",
					"name": "done",
					"type": "boolean"
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Input.ShowCodec": {
			"description": "Show codec information of the playing item",
			"params": [

			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Input.ShowOSD": {
			"description": "Show the on-screen display for the current player",
			"params": [

			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Input.ShowPlayerProcessInfo": {
			"description": "Show player process information of the playing item, like video decoder, pixel format, pvr signal strength, ...",
			"params": [

			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Input.Up": {
			"description": "Navigate up in GUI",
			"params": [

			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"JSONRPC.Introspect": {
			"description": "Enumerates all actions and descriptions",
			"params": [
				{
					"default": true,
					"name": "getdescriptions",
					"type": "boolean"
				},
				{
					"default": false,
					"name": "getmetadata",
					"type": "boolean"
				},
				{
					"default": true,
					"name": "filterbytransport",
					"type": "boolean"
				},
				{
					"name": "filter",
					"properties": {
						"getreferences": {
							"default": true,
							"description": "Whether or not to print the schema for referenced types",
							"type": "boolean"
						},
						"id": {
							"description": "Name of a namespace, method or type",
							"required": true,
							"type": "string"
						},
						"type": {
							"description": "Type of the given name",
							"enums": [
								"method",
								"namespace",
								"type",
								"notification"
							],
							"required": true,
							"type": "string"
						}
					},
					"type": "object"
				}
			],
			"returns": {
				"additionalProperties": false,
				"type": "object"
			},
			"type": "method"
		},
		"JSONRPC.NotifyAll": {
			"description": "Notify all other connected clients",
			"params": [
				{
					"name": "sender",
					"required": true,
					"type": "string"
				},
				{
					"name": "message",
					"required": true,
					"type": "string"
				},
				{
					"default": null,
					"name": "data",
					"type": "any"
				}
			],
			"returns": {
				"type": "any"
			},
			"type": "method"
		},
		"JSONRPC.Permission": {
			"description": "Retrieve the clients permissions",
			"params": [

			],
			"returns": {
				"properties": {
					"controlgui": {
						"required": true,
						"type": "boolean"
					},
					"controlnotify": {
						"required": true,
						"type": "boolean"
					},
					"controlplayback": {
						"required": true,
						"type": "boolean"
					},
					"controlpower": {
						"required": true,
						"type": "boolean"
					},
					"controlpvr": {
						"required": true,
						"type": "boolean"
					},
					"controlsystem": {
						"required": true,
						"type": "boolean"
					},
					"executeaddon": {
						"required": true,
						"type": "boolean"
					},
					"manageaddon": {
						"required": true,
						"type": "boolean"
					},
					"navigate": {
						"required": true,
						"type": "boolean"
					},
					"readdata": {
						"required": true,
						"type": "boolean"
					},
					"removedata": {
						"required": true,
						"type": "boolean"
					},
					"updatedata": {
						"required": true,
						"type": "boolean"
					},
					"writefile": {
						"required": true,
						"type": "boolean"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"JSONRPC.Ping": {
			"description": "Ping responder",
			"params": [

			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"JSONRPC.Version": {
			"description": "Retrieve the JSON-RPC protocol version.",
			"params": [

			],
			"returns": {
				"properties": {
					"version": {
						"properties": {
							"major": {
								"description": "Bumped on backwards incompatible changes to the API definition",
								"minimum": 0,
								"required": true,
								"type": "integer"
							},
							"minor": {
								"description": "Bumped on backwards compatible additions/changes to the API definition",
								"minimum": 0,
								"required": true,
								"type": "integer"
							},
							"patch": {
								"description": "Bumped on any changes to the internal implementation but not to the API definition",
								"minimum": 0,
								"required": true,
								"type": "integer"
							}
						},
						"required": true,
						"type": "object"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"PVR.AddTimer": {
			"description": "Adds a timer to record the given show one times or a timer rule to record all showings of the given show",
			"params": [
				{
					"$ref": "Library.Id",
					"description": "the broadcast id of the item to record",
					"name": "broadcastid",
					"required": true
				},
				{
					"default": false,
					"description": "controls whether to create a timer rule or a onetime timer",
					"name": "timerrule",
					"type": "boolean"
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"PVR.DeleteTimer": {
			"description": "Deletes a onetime timer or a timer rule",
			"params": [
				{
					"$ref": "Library.Id",
					"description": "the id of the onetime timer or timer rule to delete",
					"name": "timerid",
					"required": true
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"PVR.GetBroadcastDetails": {
			"description": "Retrieves the details of a specific broadcast",
			"params": [
				{
					"$ref": "Library.Id",
					"name": "broadcastid",
					"required": true
				},
				{
					"$ref": "PVR.Fields.Broadcast",
					"name": "properties"
				}
			],
			"returns": {
				"properties": {
					"broadcastdetails": {
						"$ref": "PVR.Details.Broadcast"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"PVR.GetBroadcasts": {
			"description": "Retrieves the program of a specific channel",
			"params": [
				{
					"$ref": "Library.Id",
					"name": "channelid",
					"required": true
				},
				{
					"$ref": "PVR.Fields.Broadcast",
					"name": "properties"
				},
				{
					"$ref": "List.Limits",
					"name": "limits"
				}
			],
			"returns": {
				"properties": {
					"broadcasts": {
						"items": {
							"$ref": "PVR.Details.Broadcast"
						},
						"required": true,
						"type": "array"
					},
					"limits": {
						"$ref": "List.LimitsReturned",
						"required": true
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"PVR.GetChannelDetails": {
			"description": "Retrieves the details of a specific channel",
			"params": [
				{
					"$ref": "Library.Id",
					"name": "channelid",
					"required": true
				},
				{
					"$ref": "PVR.Fields.Channel",
					"name": "properties"
				}
			],
			"returns": {
				"properties": {
					"channeldetails": {
						"$ref": "PVR.Details.Channel"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"PVR.GetChannelGroupDetails": {
			"description": "Retrieves the details of a specific channel group",
			"params": [
				{
					"$ref": "PVR.ChannelGroup.Id",
					"name": "channelgroupid",
					"required": true
				},
				{
					"name": "channels",
					"properties": {
						"limits": {
							"$ref": "List.Limits"
						},
						"properties": {
							"$ref": "PVR.Fields.Channel"
						}
					},
					"type": "object"
				}
			],
			"returns": {
				"properties": {
					"channelgroupdetails": {
						"$ref": "PVR.Details.ChannelGroup.Extended"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"PVR.GetChannelGroups": {
			"description": "Retrieves the channel groups for the specified type",
			"params": [
				{
					"$ref": "PVR.Channel.Type",
					"name": "channeltype",
					"required": true
				},
				{
					"$ref": "List.Limits",
					"name": "limits"
				}
			],
			"returns": {
				"properties": {
					"channelgroups": {
						"items": {
							"$ref": "PVR.Details.ChannelGroup"
						},
						"required": true,
						"type": "array"
					},
					"limits": {
						"$ref": "List.LimitsReturned",
						"required": true
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"PVR.GetChannels": {
			"description": "Retrieves the channel list",
			"params": [
				{
					"$ref": "PVR.ChannelGroup.Id",
					"name": "channelgroupid",
					"required": true
				},
				{
					"$ref": "PVR.Fields.Channel",
					"name": "properties"
				},
				{
					"$ref": "List.Limits",
					"name": "limits"
				}
			],
			"returns": {
				"properties": {
					"channels": {
						"items": {
							"$ref": "PVR.Details.Channel"
						},
						"required": true,
						"type": "array"
					},
					"limits": {
						"$ref": "List.LimitsReturned",
						"required": true
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"PVR.GetProperties": {
			"description": "Retrieves the values of the given properties",
			"params": [
				{
					"items": {
						"$ref": "PVR.Property.Name"
					},
					"name": "properties",
					"required": true,
					"type": "array",
					"uniqueItems": true
				}
			],
			"returns": {
				"$ref": "PVR.Property.Value"
			},
			"type": "method"
		},
		"PVR.GetRecordingDetails": {
			"description": "Retrieves the details of a specific recording",
			"params": [
				{
					"$ref": "Library.Id",
					"name": "recordingid",
					"required": true
				},
				{
					"$ref": "PVR.Fields.Recording",
					"name": "properties"
				}
			],
			"returns": {
				"properties": {
					"recordingdetails": {
						"$ref": "PVR.Details.Recording"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"PVR.GetRecordings": {
			"description": "Retrieves the recordings",
			"params": [
				{
					"$ref": "PVR.Fields.Recording",
					"name": "properties"
				},
				{
					"$ref": "List.Limits",
					"name": "limits"
				}
			],
			"returns": {
				"properties": {
					"limits": {
						"$ref": "List.LimitsReturned",
						"required": true
					},
					"recordings": {
						"items": {
							"$ref": "PVR.Details.Recording"
						},
						"required": true,
						"type": "array"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"PVR.GetTimerDetails": {
			"description": "Retrieves the details of a specific timer",
			"params": [
				{
					"$ref": "Library.Id",
					"name": "timerid",
					"required": true
				},
				{
					"$ref": "PVR.Fields.Timer",
					"name": "properties"
				}
			],
			"returns": {
				"properties": {
					"timerdetails": {
						"$ref": "PVR.Details.Timer"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"PVR.GetTimers": {
			"description": "Retrieves the timers",
			"params": [
				{
					"$ref": "PVR.Fields.Timer",
					"name": "properties"
				},
				{
					"$ref": "List.Limits",
					"name": "limits"
				}
			],
			"returns": {
				"properties": {
					"limits": {
						"$ref": "List.LimitsReturned",
						"required": true
					},
					"timers": {
						"items": {
							"$ref": "PVR.Details.Timer"
						},
						"required": true,
						"type": "array"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"PVR.Record": {
			"description": "Toggle recording of a channel",
			"params": [
				{
					"$ref": "Global.Toggle",
					"default": "toggle",
					"name": "record"
				},
				{
					"default": "current",
					"name": "channel",
					"type": [
						{
							"enums": [
								"current"
							],
							"type": "string"
						},
						{
							"$ref": "Library.Id"
						}
					]
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"PVR.Scan": {
			"description": "Starts a channel scan",
			"params": [

			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"PVR.ToggleTimer": {
			"description": "Creates or deletes a onetime timer or timer rule for a given show. If it exists, it will be deleted. If it does not exist, it will be created",
			"params": [
				{
					"$ref": "Library.Id",
					"description": "the broadcast id of the item to toggle a onetime timer or time rule for",
					"name": "broadcastid",
					"required": true
				},
				{
					"default": false,
					"description": "controls whether to create / delete a timer rule or a onetime timer",
					"name": "timerrule",
					"type": "boolean"
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Player.GetActivePlayers": {
			"description": "Returns all active players",
			"params": [

			],
			"returns": {
				"items": {
					"properties": {
						"playerid": {
							"$ref": "Player.Id",
							"required": true
						},
						"type": {
							"$ref": "Player.Type",
							"required": true
						}
					},
					"type": "object"
				},
				"type": "array",
				"uniqueItems": true
			},
			"type": "method"
		},
		"Player.GetItem": {
			"description": "Retrieves the currently played item",
			"params": [
				{
					"$ref": "Player.Id",
					"name": "playerid",
					"required": true
				},
				{
					"$ref": "List.Fields.All",
					"name": "properties"
				}
			],
			"returns": {
				"properties": {
					"item": {
						"$ref": "List.Item.All",
						"required": true
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"Player.GetPlayers": {
			"description": "Get a list of available players",
			"params": [
				{
					"default": "all",
					"enums": [
						"all",
						"video",
						"audio"
					],
					"name": "media",
					"type": "string"
				}
			],
			"returns": {
				"items": {
					"properties": {
						"name": {
							"$ref": "Global.String.NotEmpty",
							"required": true
						},
						"playsaudio": {
							"required": true,
							"type": "boolean"
						},
						"playsvideo": {
							"required": true,
							"type": "boolean"
						},
						"type": {
							"enums": [
								"internal",
								"external",
								"remote"
							],
							"required": true,
							"type": "string"
						}
					},
					"type": "object"
				},
				"type": "array",
				"uniqueItems": true
			},
			"type": "method"
		},
		"Player.GetProperties": {
			"description": "Retrieves the values of the given properties",
			"params": [
				{
					"$ref": "Player.Id",
					"name": "playerid",
					"required": true
				},
				{
					"items": {
						"$ref": "Player.Property.Name"
					},
					"name": "properties",
					"required": true,
					"type": "array",
					"uniqueItems": true
				}
			],
			"returns": {
				"$ref": "Player.Property.Value"
			},
			"type": "method"
		},
		"Player.GoTo": {
			"description": "Go to previous/next/specific item in the playlist",
			"params": [
				{
					"$ref": "Player.Id",
					"name": "playerid",
					"required": true
				},
				{
					"name": "to",
					"required": true,
					"type": [
						{
							"enums": [
								"previous",
								"next"
							],
							"type": "string"
						},
						{
							"$ref": "Playlist.Position",
							"description": "position in playlist"
						}
					]
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Player.Move": {
			"description": "If picture is zoomed move viewport left/right/up/down otherwise skip previous/next",
			"params": [
				{
					"$ref": "Player.Id",
					"name": "playerid",
					"required": true
				},
				{
					"enums": [
						"left",
						"right",
						"up",
						"down"
					],
					"name": "direction",
					"required": true,
					"type": "string"
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Player.Open": {
			"description": "Start playback of either the playlist with the given ID, a slideshow with the pictures from the given directory or a single file or an item from the database.",
			"params": [
				{
					"name": "item",
					"type": [
						{
							"additionalProperties": false,
							"properties": {
								"playlistid": {
									"$ref": "Playlist.Id",
									"required": true
								},
								"position": {
									"$ref": "Playlist.Position",
									"default": 0
								}
							},
							"type": "object"
						},
						{
							"$ref": "Playlist.Item"
						},
						{
							"additionalProperties": false,
							"properties": {
								"path": {
									"required": true,
									"type": "string"
								},
								"random": {
									"default": true,
									"description": "Deprecated, use the shuffled property of the options parameter instead",
									"type": "boolean"
								},
								"recursive": {
									"default": true,
									"type": "boolean"
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"partymode": {
									"default": "",
									"type": [
										{
											"enums": [
												"music",
												"video"
											],
											"type": "string"
										},
										{
											"description": "Path to a smartplaylist (*.xsp) file",
											"minLength": 5,
											"type": "string"
										}
									]
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"channelid": {
									"$ref": "Library.Id",
									"required": true
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"recordingid": {
									"$ref": "Library.Id",
									"required": true
								}
							},
							"type": "object"
						}
					]
				},
				{
					"additionalProperties": false,
					"name": "options",
					"properties": {
						"playername": {
							"default": null,
							"type": [
								{
									"type": "null"
								},
								{
									"enums": [
										"default"
									],
									"type": "string"
								},
								{
									"description": "name of player",
									"minLength": 1,
									"type": "string"
								}
							]
						},
						"repeat": {
							"default": null,
							"type": [
								{
									"type": "null"
								},
								{
									"$ref": "Player.Repeat"
								}
							]
						},
						"resume": {
							"default": false,
							"type": [
								{
									"description": "Whether to resume from the resume point or not",
									"type": "boolean"
								},
								{
									"$ref": "Player.Position.Percentage",
									"description": "Percentage value to start from"
								},
								{
									"$ref": "Player.Position.Time",
									"description": "Time to start from"
								}
							]
						},
						"shuffled": {
							"$ref": "Optional.Boolean",
							"default": null
						}
					},
					"type": "object"
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Player.PlayPause": {
			"description": "Pauses or unpause playback and returns the new state",
			"params": [
				{
					"$ref": "Player.Id",
					"name": "playerid",
					"required": true
				},
				{
					"$ref": "Global.Toggle",
					"default": "toggle",
					"name": "play"
				}
			],
			"returns": {
				"$ref": "Player.Speed"
			},
			"type": "method"
		},
		"Player.Rotate": {
			"description": "Rotates current picture",
			"params": [
				{
					"$ref": "Player.Id",
					"name": "playerid",
					"required": true
				},
				{
					"default": "clockwise",
					"enums": [
						"clockwise",
						"counterclockwise"
					],
					"name": "value",
					"type": "string"
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Player.Seek": {
			"description": "Seek through the playing item",
			"params": [
				{
					"$ref": "Player.Id",
					"name": "playerid",
					"required": true
				},
				{
					"name": "value",
					"required": true,
					"type": [
						{
							"$ref": "Player.Position.Percentage",
							"description": "Percentage value to seek to"
						},
						{
							"$ref": "Player.Position.Time",
							"description": "Time to seek to"
						},
						{
							"description": "Seek by predefined jumps",
							"enums": [
								"smallforward",
								"smallbackward",
								"bigforward",
								"bigbackward"
							],
							"type": "string"
						},
						{
							"additionalProperties": false,
							"properties": {
								"percentage": {
									"$ref": "Player.Position.Percentage",
									"description": "Percentage value to seek to",
									"required": true
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"time": {
									"$ref": "Player.Position.Time",
									"description": "Time to seek to",
									"required": true
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"step": {
									"description": "Seek by predefined jumps",
									"enums": [
										"smallforward",
										"smallbackward",
										"bigforward",
										"bigbackward"
									],
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"seconds": {
									"description": "Seek by the given number of seconds",
									"required": true,
									"type": "integer"
								}
							},
							"type": "object"
						}
					]
				}
			],
			"returns": {
				"properties": {
					"percentage": {
						"$ref": "Player.Position.Percentage",
						"default": 0
					},
					"time": {
						"$ref": "Global.Time"
					},
					"totaltime": {
						"$ref": "Global.Time"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"Player.SetAudioStream": {
			"description": "Set the audio stream played by the player",
			"params": [
				{
					"$ref": "Player.Id",
					"name": "playerid",
					"required": true
				},
				{
					"name": "stream",
					"required": true,
					"type": [
						{
							"enums": [
								"previous",
								"next"
							],
							"type": "string"
						},
						{
							"description": "Index of the audio stream to play",
							"minimum": 0,
							"type": "integer"
						}
					]
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Player.SetPartymode": {
			"description": "Turn partymode on or off",
			"params": [
				{
					"$ref": "Player.Id",
					"name": "playerid",
					"required": true
				},
				{
					"$ref": "Global.Toggle",
					"name": "partymode",
					"required": true
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Player.SetRepeat": {
			"description": "Set the repeat mode of the player",
			"params": [
				{
					"$ref": "Player.Id",
					"name": "playerid",
					"required": true
				},
				{
					"name": "repeat",
					"required": true,
					"type": [
						{
							"$ref": "Player.Repeat"
						},
						{
							"enums": [
								"cycle"
							],
							"type": "string"
						}
					]
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Player.SetShuffle": {
			"description": "Shuffle/Unshuffle items in the player",
			"params": [
				{
					"$ref": "Player.Id",
					"name": "playerid",
					"required": true
				},
				{
					"$ref": "Global.Toggle",
					"name": "shuffle",
					"required": true
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Player.SetSpeed": {
			"description": "Set the speed of the current playback",
			"params": [
				{
					"$ref": "Player.Id",
					"name": "playerid",
					"required": true
				},
				{
					"name": "speed",
					"required": true,
					"type": [
						{
							"enums": [
								-32,
								-16,
								-8,
								-4,
								-2,
								-1,
								0,
								1,
								2,
								4,
								8,
								16,
								32
							],
							"type": "integer"
						},
						{
							"$ref": "Global.IncrementDecrement"
						}
					]
				}
			],
			"returns": {
				"$ref": "Player.Speed"
			},
			"type": "method"
		},
		"Player.SetSubtitle": {
			"description": "Set the subtitle displayed by the player",
			"params": [
				{
					"$ref": "Player.Id",
					"name": "playerid",
					"required": true
				},
				{
					"name": "subtitle",
					"required": true,
					"type": [
						{
							"enums": [
								"previous",
								"next",
								"off",
								"on"
							],
							"type": "string"
						},
						{
							"description": "Index of the subtitle to display",
							"minimum": 0,
							"type": "integer"
						}
					]
				},
				{
					"default": false,
					"description": "Whether to enable subtitles to be displayed after setting the new subtitle",
					"name": "enable",
					"type": "boolean"
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Player.SetVideoStream": {
			"description": "Set the video stream played by the player",
			"params": [
				{
					"$ref": "Player.Id",
					"name": "playerid",
					"required": true
				},
				{
					"name": "stream",
					"required": true,
					"type": [
						{
							"enums": [
								"previous",
								"next"
							],
							"type": "string"
						},
						{
							"description": "Index of the video stream to play",
							"minimum": 0,
							"type": "integer"
						}
					]
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Player.Stop": {
			"description": "Stops playback",
			"params": [
				{
					"$ref": "Player.Id",
					"name": "playerid",
					"required": true
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Player.Zoom": {
			"description": "Zoom current picture",
			"params": [
				{
					"$ref": "Player.Id",
					"name": "playerid",
					"required": true
				},
				{
					"name": "zoom",
					"required": true,
					"type": [
						{
							"enums": [
								"in",
								"out"
							],
							"type": "string"
						},
						{
							"description": "zoom level",
							"maximum": 10,
							"minimum": 1,
							"type": "integer"
						}
					]
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Playlist.Add": {
			"description": "Add item(s) to playlist",
			"params": [
				{
					"$ref": "Playlist.Id",
					"name": "playlistid",
					"required": true
				},
				{
					"name": "item",
					"required": true,
					"type": [
						{
							"$ref": "Playlist.Item"
						},
						{
							"items": {
								"$ref": "Playlist.Item"
							},
							"type": "array"
						}
					]
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Playlist.Clear": {
			"description": "Clear playlist",
			"params": [
				{
					"$ref": "Playlist.Id",
					"name": "playlistid",
					"required": true
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Playlist.GetItems": {
			"description": "Get all items from playlist",
			"params": [
				{
					"$ref": "Playlist.Id",
					"name": "playlistid",
					"required": true
				},
				{
					"$ref": "List.Fields.All",
					"name": "properties"
				},
				{
					"$ref": "List.Limits",
					"name": "limits"
				},
				{
					"$ref": "List.Sort",
					"name": "sort"
				}
			],
			"returns": {
				"properties": {
					"items": {
						"items": {
							"$ref": "List.Item.All"
						},
						"required": true,
						"type": "array"
					},
					"limits": {
						"$ref": "List.LimitsReturned",
						"required": true
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"Playlist.GetPlaylists": {
			"description": "Returns all existing playlists",
			"params": [

			],
			"returns": {
				"items": {
					"properties": {
						"playlistid": {
							"$ref": "Playlist.Id",
							"required": true
						},
						"type": {
							"$ref": "Playlist.Type",
							"required": true
						}
					},
					"type": "object"
				},
				"type": "array",
				"uniqueItems": true
			},
			"type": "method"
		},
		"Playlist.GetProperties": {
			"description": "Retrieves the values of the given properties",
			"params": [
				{
					"$ref": "Playlist.Id",
					"name": "playlistid",
					"required": true
				},
				{
					"items": {
						"$ref": "Playlist.Property.Name"
					},
					"name": "properties",
					"required": true,
					"type": "array",
					"uniqueItems": true
				}
			],
			"returns": {
				"$ref": "Playlist.Property.Value"
			},
			"type": "method"
		},
		"Playlist.Insert": {
			"description": "Insert item(s) into playlist. Does not work for picture playlists (aka slideshows).",
			"params": [
				{
					"$ref": "Playlist.Id",
					"name": "playlistid",
					"required": true
				},
				{
					"$ref": "Playlist.Position",
					"name": "position",
					"required": true
				},
				{
					"name": "item",
					"required": true,
					"type": [
						{
							"$ref": "Playlist.Item"
						},
						{
							"items": {
								"$ref": "Playlist.Item"
							},
							"type": "array"
						}
					]
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Playlist.Remove": {
			"description": "Remove item from playlist. Does not work for picture playlists (aka slideshows).",
			"params": [
				{
					"$ref": "Playlist.Id",
					"name": "playlistid",
					"required": true
				},
				{
					"$ref": "Playlist.Position",
					"name": "position",
					"required": true
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Playlist.Swap": {
			"description": "Swap items in the playlist. Does not work for picture playlists (aka slideshows).",
			"params": [
				{
					"$ref": "Playlist.Id",
					"name": "playlistid",
					"required": true
				},
				{
					"$ref": "Playlist.Position",
					"name": "position1",
					"required": true
				},
				{
					"$ref": "Playlist.Position",
					"name": "position2",
					"required": true
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Profiles.GetCurrentProfile": {
			"description": "Retrieve the current profile",
			"params": [
				{
					"$ref": "Profiles.Fields.Profile",
					"name": "properties"
				}
			],
			"returns": {
				"$ref": "Profiles.Details.Profile"
			},
			"type": "method"
		},
		"Profiles.GetProfiles": {
			"description": "Retrieve all profiles",
			"params": [
				{
					"$ref": "Profiles.Fields.Profile",
					"name": "properties"
				},
				{
					"$ref": "List.Limits",
					"name": "limits"
				},
				{
					"$ref": "List.Sort",
					"name": "sort"
				}
			],
			"returns": {
				"properties": {
					"limits": {
						"$ref": "List.LimitsReturned",
						"required": true
					},
					"profiles": {
						"items": {
							"$ref": "Profiles.Details.Profile"
						},
						"required": true,
						"type": "array"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"Profiles.LoadProfile": {
			"description": "Load the specified profile",
			"params": [
				{
					"description": "Profile name",
					"name": "profile",
					"required": true,
					"type": "string"
				},
				{
					"default": false,
					"description": "Prompt for password",
					"name": "prompt",
					"type": "boolean"
				},
				{
					"$ref": "Profiles.Password",
					"name": "password"
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Settings.GetCategories": {
			"description": "Retrieves all setting categories",
			"params": [
				{
					"$ref": "Setting.Level",
					"default": "standard",
					"name": "level"
				},
				{
					"default": "",
					"name": "section",
					"type": "string"
				},
				{
					"extends": "Item.Fields.Base",
					"items": {
						"enums": [
							"settings"
						],
						"type": "string"
					},
					"name": "properties"
				}
			],
			"returns": {
				"properties": {
					"categories": {
						"items": {
							"$ref": "Setting.Details.Category"
						},
						"type": "array"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"Settings.GetSections": {
			"description": "Retrieves all setting sections",
			"params": [
				{
					"$ref": "Setting.Level",
					"default": "standard",
					"name": "level"
				},
				{
					"extends": "Item.Fields.Base",
					"items": {
						"enums": [
							"categories"
						],
						"type": "string"
					},
					"name": "properties"
				}
			],
			"returns": {
				"properties": {
					"sections": {
						"items": {
							"$ref": "Setting.Details.Section"
						},
						"type": "array"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"Settings.GetSettingValue": {
			"description": "Retrieves the value of a setting",
			"params": [
				{
					"minLength": 1,
					"name": "setting",
					"required": true,
					"type": "string"
				}
			],
			"returns": {
				"properties": {
					"value": {
						"$ref": "Setting.Value.Extended",
						"required": true
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"Settings.GetSettings": {
			"description": "Retrieves all settings",
			"params": [
				{
					"$ref": "Setting.Level",
					"default": "standard",
					"name": "level"
				},
				{
					"name": "filter",
					"type": [
						{
							"additionalProperties": false,
							"properties": {
								"category": {
									"minLength": 1,
									"required": true,
									"type": "string"
								},
								"section": {
									"minLength": 1,
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						}
					]
				}
			],
			"returns": {
				"properties": {
					"settings": {
						"items": {
							"$ref": "Setting.Details.Setting"
						},
						"type": "array"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"Settings.ResetSettingValue": {
			"description": "Resets the value of a setting",
			"params": [
				{
					"minLength": 1,
					"name": "setting",
					"required": true,
					"type": "string"
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Settings.SetSettingValue": {
			"description": "Changes the value of a setting",
			"params": [
				{
					"minLength": 1,
					"name": "setting",
					"required": true,
					"type": "string"
				},
				{
					"$ref": "Setting.Value.Extended",
					"name": "value",
					"required": true
				}
			],
			"returns": {
				"type": "boolean"
			},
			"type": "method"
		},
		"System.EjectOpticalDrive": {
			"description": "Ejects or closes the optical disc drive (if available)",
			"params": [

			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"System.GetProperties": {
			"description": "Retrieves the values of the given properties",
			"params": [
				{
					"items": {
						"$ref": "System.Property.Name"
					},
					"name": "properties",
					"required": true,
					"type": "array",
					"uniqueItems": true
				}
			],
			"returns": {
				"$ref": "System.Property.Value"
			},
			"type": "method"
		},
		"System.Hibernate": {
			"description": "Puts the system running Kodi into hibernate mode",
			"params": [

			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"System.Reboot": {
			"description": "Reboots the system running Kodi",
			"params": [

			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"System.Shutdown": {
			"description": "Shuts the system running Kodi down",
			"params": [

			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"System.Suspend": {
			"description": "Suspends the system running Kodi",
			"params": [

			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"Textures.GetTextures": {
			"description": "Retrieve all textures",
			"params": [
				{
					"$ref": "Textures.Fields.Texture",
					"name": "properties"
				},
				{
					"$ref": "List.Filter.Textures",
					"name": "filter"
				}
			],
			"returns": {
				"properties": {
					"textures": {
						"items": {
							"$ref": "Textures.Details.Texture"
						},
						"required": true,
						"type": "array"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"Textures.RemoveTexture": {
			"description": "Remove the specified texture",
			"params": [
				{
					"$ref": "Library.Id",
					"description": "Texture database identifier",
					"name": "textureid",
					"required": true
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"VideoLibrary.Clean": {
			"description": "Cleans the video library from non-existent items",
			"params": [
				{
					"default": true,
					"description": "Whether or not to show the progress bar or any other GUI dialog",
					"name": "showdialogs",
					"type": "boolean"
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"VideoLibrary.Export": {
			"description": "Exports all items from the video library",
			"params": [
				{
					"name": "options",
					"type": [
						{
							"additionalProperties": false,
							"properties": {
								"path": {
									"description": "Path to the directory to where the data should be exported",
									"minLength": 1,
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"actorthumbs": {
									"default": false,
									"description": "Whether to export actor thumbnails",
									"type": "boolean"
								},
								"images": {
									"default": false,
									"description": "Whether to export thumbnails and fanart images",
									"type": "boolean"
								},
								"overwrite": {
									"default": false,
									"description": "Whether to overwrite existing exported files",
									"type": "boolean"
								}
							},
							"type": "object"
						}
					]
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"VideoLibrary.GetEpisodeDetails": {
			"description": "Retrieve details about a specific tv show episode",
			"params": [
				{
					"$ref": "Library.Id",
					"name": "episodeid",
					"required": true
				},
				{
					"$ref": "Video.Fields.Episode",
					"name": "properties"
				}
			],
			"returns": {
				"properties": {
					"episodedetails": {
						"$ref": "Video.Details.Episode"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"VideoLibrary.GetEpisodes": {
			"description": "Retrieve all tv show episodes",
			"params": [
				{
					"$ref": "Library.Id",
					"default": -1,
					"name": "tvshowid"
				},
				{
					"default": -1,
					"minimum": 0,
					"name": "season",
					"type": "integer"
				},
				{
					"$ref": "Video.Fields.Episode",
					"name": "properties"
				},
				{
					"$ref": "List.Limits",
					"name": "limits"
				},
				{
					"$ref": "List.Sort",
					"name": "sort"
				},
				{
					"name": "filter",
					"type": [
						{
							"additionalProperties": false,
							"properties": {
								"genreid": {
									"$ref": "Library.Id",
									"description": "Requires tvshowid to be set",
									"required": true
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"genre": {
									"description": "Requires tvshowid to be set",
									"minLength": 1,
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"year": {
									"minimum": 0,
									"required": true,
									"type": "integer"
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"actor": {
									"description": "Requires tvshowid to be set",
									"minLength": 1,
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"director": {
									"minLength": 1,
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						},
						{
							"$ref": "List.Filter.Episodes"
						}
					]
				}
			],
			"returns": {
				"properties": {
					"episodes": {
						"items": {
							"$ref": "Video.Details.Episode"
						},
						"type": "array"
					},
					"limits": {
						"$ref": "List.LimitsReturned",
						"required": true
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"VideoLibrary.GetGenres": {
			"description": "Retrieve all genres",
			"params": [
				{
					"enums": [
						"movie",
						"tvshow",
						"musicvideo"
					],
					"name": "type",
					"required": true,
					"type": "string"
				},
				{
					"$ref": "Library.Fields.Genre",
					"name": "properties"
				},
				{
					"$ref": "List.Limits",
					"name": "limits"
				},
				{
					"$ref": "List.Sort",
					"name": "sort"
				}
			],
			"returns": {
				"properties": {
					"genres": {
						"items": {
							"$ref": "Library.Details.Genre"
						},
						"required": true,
						"type": "array"
					},
					"limits": {
						"$ref": "List.LimitsReturned",
						"required": true
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"VideoLibrary.GetInProgressTVShows": {
			"description": "Retrieve all in progress tvshows",
			"params": [
				{
					"$ref": "Video.Fields.TVShow",
					"name": "properties"
				},
				{
					"$ref": "List.Limits",
					"name": "limits"
				},
				{
					"$ref": "List.Sort",
					"name": "sort"
				}
			],
			"returns": {
				"properties": {
					"limits": {
						"$ref": "List.LimitsReturned",
						"required": true
					},
					"tvshows": {
						"items": {
							"$ref": "Video.Details.TVShow"
						},
						"type": "array"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"VideoLibrary.GetMovieDetails": {
			"description": "Retrieve details about a specific movie",
			"params": [
				{
					"$ref": "Library.Id",
					"name": "movieid",
					"required": true
				},
				{
					"$ref": "Video.Fields.Movie",
					"name": "properties"
				}
			],
			"returns": {
				"properties": {
					"moviedetails": {
						"$ref": "Video.Details.Movie"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"VideoLibrary.GetMovieSetDetails": {
			"description": "Retrieve details about a specific movie set",
			"params": [
				{
					"$ref": "Library.Id",
					"name": "setid",
					"required": true
				},
				{
					"$ref": "Video.Fields.MovieSet",
					"name": "properties"
				},
				{
					"name": "movies",
					"properties": {
						"limits": {
							"$ref": "List.Limits"
						},
						"properties": {
							"$ref": "Video.Fields.Movie"
						},
						"sort": {
							"$ref": "List.Sort"
						}
					},
					"type": "object"
				}
			],
			"returns": {
				"properties": {
					"setdetails": {
						"$ref": "Video.Details.MovieSet.Extended"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"VideoLibrary.GetMovieSets": {
			"description": "Retrieve all movie sets",
			"params": [
				{
					"$ref": "Video.Fields.MovieSet",
					"name": "properties"
				},
				{
					"$ref": "List.Limits",
					"name": "limits"
				},
				{
					"$ref": "List.Sort",
					"name": "sort"
				}
			],
			"returns": {
				"properties": {
					"limits": {
						"$ref": "List.LimitsReturned",
						"required": true
					},
					"sets": {
						"items": {
							"$ref": "Video.Details.MovieSet"
						},
						"type": "array"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"VideoLibrary.GetMovies": {
			"description": "Retrieve all movies",
			"params": [
				{
					"$ref": "Video.Fields.Movie",
					"name": "properties"
				},
				{
					"$ref": "List.Limits",
					"name": "limits"
				},
				{
					"$ref": "List.Sort",
					"name": "sort"
				},
				{
					"name": "filter",
					"type": [
						{
							"additionalProperties": false,
							"properties": {
								"genreid": {
									"$ref": "Library.Id",
									"required": true
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"genre": {
									"minLength": 1,
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"year": {
									"minimum": 0,
									"required": true,
									"type": "integer"
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"actor": {
									"minLength": 1,
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"director": {
									"minLength": 1,
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"studio": {
									"minLength": 1,
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"country": {
									"minLength": 1,
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"setid": {
									"$ref": "Library.Id",
									"required": true
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"set": {
									"minLength": 1,
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"tag": {
									"minLength": 1,
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						},
						{
							"$ref": "List.Filter.Movies"
						}
					]
				}
			],
			"returns": {
				"properties": {
					"limits": {
						"$ref": "List.LimitsReturned",
						"required": true
					},
					"movies": {
						"items": {
							"$ref": "Video.Details.Movie"
						},
						"type": "array"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"VideoLibrary.GetMusicVideoDetails": {
			"description": "Retrieve details about a specific music video",
			"params": [
				{
					"$ref": "Library.Id",
					"name": "musicvideoid",
					"required": true
				},
				{
					"$ref": "Video.Fields.MusicVideo",
					"name": "properties"
				}
			],
			"returns": {
				"properties": {
					"musicvideodetails": {
						"$ref": "Video.Details.MusicVideo"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"VideoLibrary.GetMusicVideos": {
			"description": "Retrieve all music videos",
			"params": [
				{
					"$ref": "Video.Fields.MusicVideo",
					"name": "properties"
				},
				{
					"$ref": "List.Limits",
					"name": "limits"
				},
				{
					"$ref": "List.Sort",
					"name": "sort"
				},
				{
					"name": "filter",
					"type": [
						{
							"additionalProperties": false,
							"properties": {
								"artist": {
									"minLength": 1,
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"genreid": {
									"$ref": "Library.Id",
									"required": true
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"genre": {
									"minLength": 1,
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"year": {
									"minimum": 0,
									"required": true,
									"type": "integer"
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"director": {
									"minLength": 1,
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"studio": {
									"minLength": 1,
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"tag": {
									"minLength": 1,
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						},
						{
							"$ref": "List.Filter.MusicVideos"
						}
					]
				}
			],
			"returns": {
				"properties": {
					"limits": {
						"$ref": "List.LimitsReturned",
						"required": true
					},
					"musicvideos": {
						"items": {
							"$ref": "Video.Details.MusicVideo"
						},
						"type": "array"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"VideoLibrary.GetRecentlyAddedEpisodes": {
			"description": "Retrieve all recently added tv episodes",
			"params": [
				{
					"$ref": "Video.Fields.Episode",
					"name": "properties"
				},
				{
					"$ref": "List.Limits",
					"name": "limits"
				},
				{
					"$ref": "List.Sort",
					"name": "sort"
				}
			],
			"returns": {
				"properties": {
					"episodes": {
						"items": {
							"$ref": "Video.Details.Episode"
						},
						"type": "array"
					},
					"limits": {
						"$ref": "List.LimitsReturned",
						"required": true
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"VideoLibrary.GetRecentlyAddedMovies": {
			"description": "Retrieve all recently added movies",
			"params": [
				{
					"$ref": "Video.Fields.Movie",
					"name": "properties"
				},
				{
					"$ref": "List.Limits",
					"name": "limits"
				},
				{
					"$ref": "List.Sort",
					"name": "sort"
				}
			],
			"returns": {
				"properties": {
					"limits": {
						"$ref": "List.LimitsReturned",
						"required": true
					},
					"movies": {
						"items": {
							"$ref": "Video.Details.Movie"
						},
						"type": "array"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"VideoLibrary.GetRecentlyAddedMusicVideos": {
			"description": "Retrieve all recently added music videos",
			"params": [
				{
					"$ref": "Video.Fields.MusicVideo",
					"name": "properties"
				},
				{
					"$ref": "List.Limits",
					"name": "limits"
				},
				{
					"$ref": "List.Sort",
					"name": "sort"
				}
			],
			"returns": {
				"properties": {
					"limits": {
						"$ref": "List.LimitsReturned",
						"required": true
					},
					"musicvideos": {
						"items": {
							"$ref": "Video.Details.MusicVideo"
						},
						"type": "array"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"VideoLibrary.GetSeasonDetails": {
			"description": "Retrieve details about a specific tv show season",
			"params": [
				{
					"$ref": "Library.Id",
					"name": "seasonid",
					"required": true
				},
				{
					"$ref": "Video.Fields.Season",
					"name": "properties"
				}
			],
			"returns": {
				"properties": {
					"seasondetails": {
						"$ref": "Video.Details.Season"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"VideoLibrary.GetSeasons": {
			"description": "Retrieve all tv seasons",
			"params": [
				{
					"$ref": "Library.Id",
					"default": -1,
					"name": "tvshowid"
				},
				{
					"$ref": "Video.Fields.Season",
					"name": "properties"
				},
				{
					"$ref": "List.Limits",
					"name": "limits"
				},
				{
					"$ref": "List.Sort",
					"name": "sort"
				}
			],
			"returns": {
				"properties": {
					"limits": {
						"$ref": "List.LimitsReturned",
						"required": true
					},
					"seasons": {
						"items": {
							"$ref": "Video.Details.Season"
						},
						"type": "array"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"VideoLibrary.GetTVShowDetails": {
			"description": "Retrieve details about a specific tv show",
			"params": [
				{
					"$ref": "Library.Id",
					"name": "tvshowid",
					"required": true
				},
				{
					"$ref": "Video.Fields.TVShow",
					"name": "properties"
				}
			],
			"returns": {
				"properties": {
					"tvshowdetails": {
						"$ref": "Video.Details.TVShow"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"VideoLibrary.GetTVShows": {
			"description": "Retrieve all tv shows",
			"params": [
				{
					"$ref": "Video.Fields.TVShow",
					"name": "properties"
				},
				{
					"$ref": "List.Limits",
					"name": "limits"
				},
				{
					"$ref": "List.Sort",
					"name": "sort"
				},
				{
					"name": "filter",
					"type": [
						{
							"additionalProperties": false,
							"properties": {
								"genreid": {
									"$ref": "Library.Id",
									"required": true
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"genre": {
									"minLength": 1,
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"year": {
									"minimum": 0,
									"required": true,
									"type": "integer"
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"actor": {
									"minLength": 1,
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"studio": {
									"minLength": 1,
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						},
						{
							"additionalProperties": false,
							"properties": {
								"tag": {
									"minLength": 1,
									"required": true,
									"type": "string"
								}
							},
							"type": "object"
						},
						{
							"$ref": "List.Filter.TVShows"
						}
					]
				}
			],
			"returns": {
				"properties": {
					"limits": {
						"$ref": "List.LimitsReturned",
						"required": true
					},
					"tvshows": {
						"items": {
							"$ref": "Video.Details.TVShow"
						},
						"type": "array"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"VideoLibrary.GetTags": {
			"description": "Retrieve all tags",
			"params": [
				{
					"enums": [
						"movie",
						"tvshow",
						"musicvideo"
					],
					"name": "type",
					"required": true,
					"type": "string"
				},
				{
					"$ref": "Library.Fields.Tag",
					"name": "properties"
				},
				{
					"$ref": "List.Limits",
					"name": "limits"
				},
				{
					"$ref": "List.Sort",
					"name": "sort"
				}
			],
			"returns": {
				"properties": {
					"limits": {
						"$ref": "List.LimitsReturned",
						"required": true
					},
					"tags": {
						"items": {
							"$ref": "Library.Details.Tag"
						},
						"required": true,
						"type": "array"
					}
				},
				"type": "object"
			},
			"type": "method"
		},
		"VideoLibrary.RefreshEpisode": {
			"description": "Refresh the given episode in the library",
			"params": [
				{
					"$ref": "Library.Id",
					"name": "episodeid",
					"required": true
				},
				{
					"default": false,
					"description": "Whether or not to ignore a local NFO if present.",
					"name": "ignorenfo",
					"type": "boolean"
				},
				{
					"default": "",
					"description": "Title to use for searching (instead of determining it from the item's filename/path).",
					"name": "title",
					"type": "string"
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"VideoLibrary.RefreshMovie": {
			"description": "Refresh the given movie in the library",
			"params": [
				{
					"$ref": "Library.Id",
					"name": "movieid",
					"required": true
				},
				{
					"default": false,
					"description": "Whether or not to ignore a local NFO if present.",
					"name": "ignorenfo",
					"type": "boolean"
				},
				{
					"default": "",
					"description": "Title to use for searching (instead of determining it from the item's filename/path).",
					"name": "title",
					"type": "string"
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"VideoLibrary.RefreshMusicVideo": {
			"description": "Refresh the given music video in the library",
			"params": [
				{
					"$ref": "Library.Id",
					"name": "musicvideoid",
					"required": true
				},
				{
					"default": false,
					"description": "Whether or not to ignore a local NFO if present.",
					"name": "ignorenfo",
					"type": "boolean"
				},
				{
					"default": "",
					"description": "Title to use for searching (instead of determining it from the item's filename/path).",
					"name": "title",
					"type": "string"
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"VideoLibrary.RefreshTVShow": {
			"description": "Refresh the given tv show in the library",
			"params": [
				{
					"$ref": "Library.Id",
					"name": "tvshowid",
					"required": true
				},
				{
					"default": false,
					"description": "Whether or not to ignore a local NFO if present.",
					"name": "ignorenfo",
					"type": "boolean"
				},
				{
					"default": false,
					"description": "Whether or not to refresh all episodes belonging to the TV show.",
					"name": "refreshepisodes",
					"type": "boolean"
				},
				{
					"default": "",
					"description": "Title to use for searching (instead of determining it from the item's filename/path).",
					"name": "title",
					"type": "string"
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"VideoLibrary.RemoveEpisode": {
			"description": "Removes the given episode from the library",
			"params": [
				{
					"$ref": "Library.Id",
					"name": "episodeid",
					"required": true
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"VideoLibrary.RemoveMovie": {
			"description": "Removes the given movie from the library",
			"params": [
				{
					"$ref": "Library.Id",
					"name": "movieid",
					"required": true
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"VideoLibrary.RemoveMusicVideo": {
			"description": "Removes the given music video from the library",
			"params": [
				{
					"$ref": "Library.Id",
					"name": "musicvideoid",
					"required": true
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"VideoLibrary.RemoveTVShow": {
			"description": "Removes the given tv show from the library",
			"params": [
				{
					"$ref": "Library.Id",
					"name": "tvshowid",
					"required": true
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"VideoLibrary.Scan": {
			"description": "Scans the video sources for new library items",
			"params": [
				{
					"default": "",
					"name": "directory",
					"type": "string"
				},
				{
					"default": true,
					"description": "Whether or not to show the progress bar or any other GUI dialog",
					"name": "showdialogs",
					"type": "boolean"
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"VideoLibrary.SetEpisodeDetails": {
			"description": "Update the given episode with the given details",
			"params": [
				{
					"$ref": "Library.Id",
					"name": "episodeid",
					"required": true
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "title"
				},
				{
					"$ref": "Optional.Integer",
					"default": null,
					"name": "playcount"
				},
				{
					"$ref": "Optional.Integer",
					"default": null,
					"description": "Runtime in seconds",
					"name": "runtime"
				},
				{
					"default": null,
					"name": "director",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Array.String"
						}
					]
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "plot"
				},
				{
					"$ref": "Optional.Number",
					"default": null,
					"name": "rating"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "votes"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "lastplayed"
				},
				{
					"default": null,
					"name": "writer",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Array.String"
						}
					]
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "firstaired"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "productioncode"
				},
				{
					"$ref": "Optional.Integer",
					"default": null,
					"name": "season"
				},
				{
					"$ref": "Optional.Integer",
					"default": null,
					"name": "episode"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "originaltitle"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "thumbnail"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "fanart"
				},
				{
					"default": null,
					"name": "art",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Media.Artwork.Set"
						}
					]
				},
				{
					"default": null,
					"name": "resume",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Video.Resume"
						}
					]
				},
				{
					"$ref": "Optional.Integer",
					"default": null,
					"name": "userrating"
				},
				{
					"$ref": "Video.Ratings.Set",
					"name": "ratings"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "dateadded"
				},
				{
					"default": null,
					"name": "uniqueid",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Media.UniqueID.Set"
						}
					]
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"VideoLibrary.SetMovieDetails": {
			"description": "Update the given movie with the given details",
			"params": [
				{
					"$ref": "Library.Id",
					"name": "movieid",
					"required": true
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "title"
				},
				{
					"$ref": "Optional.Integer",
					"default": null,
					"name": "playcount"
				},
				{
					"$ref": "Optional.Integer",
					"default": null,
					"description": "Runtime in seconds",
					"name": "runtime"
				},
				{
					"default": null,
					"name": "director",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Array.String"
						}
					]
				},
				{
					"default": null,
					"name": "studio",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Array.String"
						}
					]
				},
				{
					"$ref": "Optional.Integer",
					"default": null,
					"description": "linked with premiered. Overridden by premiered parameter",
					"name": "year"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "plot"
				},
				{
					"default": null,
					"name": "genre",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Array.String"
						}
					]
				},
				{
					"$ref": "Optional.Number",
					"default": null,
					"name": "rating"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "mpaa"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "imdbnumber"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "votes"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "lastplayed"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "originaltitle"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "trailer"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "tagline"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "plotoutline"
				},
				{
					"default": null,
					"name": "writer",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Array.String"
						}
					]
				},
				{
					"default": null,
					"name": "country",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Array.String"
						}
					]
				},
				{
					"$ref": "Optional.Integer",
					"default": null,
					"name": "top250"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "sorttitle"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "set"
				},
				{
					"default": null,
					"name": "showlink",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Array.String"
						}
					]
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "thumbnail"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "fanart"
				},
				{
					"default": null,
					"name": "tag",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Array.String"
						}
					]
				},
				{
					"default": null,
					"name": "art",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Media.Artwork.Set"
						}
					]
				},
				{
					"default": null,
					"name": "resume",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Video.Resume"
						}
					]
				},
				{
					"$ref": "Optional.Integer",
					"default": null,
					"name": "userrating"
				},
				{
					"$ref": "Video.Ratings.Set",
					"name": "ratings"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "dateadded"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"description": "linked with year. Overriedes year",
					"name": "premiered"
				},
				{
					"default": null,
					"name": "uniqueid",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Media.UniqueID.Set"
						}
					]
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"VideoLibrary.SetMovieSetDetails": {
			"description": "Update the given movie set with the given details",
			"params": [
				{
					"$ref": "Library.Id",
					"name": "setid",
					"required": true
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "title"
				},
				{
					"default": null,
					"name": "art",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Media.Artwork.Set"
						}
					]
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"VideoLibrary.SetMusicVideoDetails": {
			"description": "Update the given music video with the given details",
			"params": [
				{
					"$ref": "Library.Id",
					"name": "musicvideoid",
					"required": true
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "title"
				},
				{
					"$ref": "Optional.Integer",
					"default": null,
					"name": "playcount"
				},
				{
					"$ref": "Optional.Integer",
					"default": null,
					"description": "Runtime in seconds",
					"name": "runtime"
				},
				{
					"default": null,
					"name": "director",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Array.String"
						}
					]
				},
				{
					"default": null,
					"name": "studio",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Array.String"
						}
					]
				},
				{
					"$ref": "Optional.Integer",
					"default": null,
					"description": "linked with premiered. Overridden by premiered parameter",
					"name": "year"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "plot"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "album"
				},
				{
					"default": null,
					"name": "artist",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Array.String"
						}
					]
				},
				{
					"default": null,
					"name": "genre",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Array.String"
						}
					]
				},
				{
					"$ref": "Optional.Integer",
					"default": null,
					"name": "track"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "lastplayed"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "thumbnail"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "fanart"
				},
				{
					"default": null,
					"name": "tag",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Array.String"
						}
					]
				},
				{
					"default": null,
					"name": "art",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Media.Artwork.Set"
						}
					]
				},
				{
					"default": null,
					"name": "resume",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Video.Resume"
						}
					]
				},
				{
					"$ref": "Optional.Number",
					"default": null,
					"name": "rating"
				},
				{
					"$ref": "Optional.Integer",
					"default": null,
					"name": "userrating"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "dateadded"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"description": "linked with year. Overriedes year",
					"name": "premiered"
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"VideoLibrary.SetSeasonDetails": {
			"description": "Update the given season with the given details",
			"params": [
				{
					"$ref": "Library.Id",
					"name": "seasonid",
					"required": true
				},
				{
					"default": null,
					"name": "art",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Media.Artwork.Set"
						}
					]
				},
				{
					"$ref": "Optional.Integer",
					"default": null,
					"name": "userrating"
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"VideoLibrary.SetTVShowDetails": {
			"description": "Update the given tvshow with the given details",
			"params": [
				{
					"$ref": "Library.Id",
					"name": "tvshowid",
					"required": true
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "title"
				},
				{
					"$ref": "Optional.Integer",
					"default": null,
					"name": "playcount"
				},
				{
					"default": null,
					"name": "studio",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Array.String"
						}
					]
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "plot"
				},
				{
					"default": null,
					"name": "genre",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Array.String"
						}
					]
				},
				{
					"$ref": "Optional.Number",
					"default": null,
					"name": "rating"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "mpaa"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "imdbnumber"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "premiered"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "votes"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "lastplayed"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "originaltitle"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "sorttitle"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "episodeguide"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "thumbnail"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "fanart"
				},
				{
					"default": null,
					"name": "tag",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Array.String"
						}
					]
				},
				{
					"default": null,
					"name": "art",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Media.Artwork.Set"
						}
					]
				},
				{
					"$ref": "Optional.Integer",
					"default": null,
					"name": "userrating"
				},
				{
					"$ref": "Video.Ratings.Set",
					"name": "ratings"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "dateadded"
				},
				{
					"$ref": "Optional.Integer",
					"default": null,
					"description": "Runtime in seconds",
					"name": "runtime"
				},
				{
					"$ref": "Optional.String",
					"default": null,
					"name": "status"
				},
				{
					"default": null,
					"name": "uniqueid",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Media.UniqueID.Set"
						}
					]
				}
			],
			"returns": {
				"type": "string"
			},
			"type": "method"
		},
		"XBMC.GetInfoBooleans": {
			"description": "Retrieve info booleans about Kodi and the system",
			"params": [
				{
					"items": {
						"type": "string"
					},
					"minItems": 1,
					"name": "booleans",
					"required": true,
					"type": "array"
				}
			],
			"returns": {
				"additionalProperties": {
					"default": "",
					"type": "string"
				},
				"description": "Object containing key-value pairs of the retrieved info booleans",
				"type": "object"
			},
			"type": "method"
		},
		"XBMC.GetInfoLabels": {
			"description": "Retrieve info labels about Kodi and the system",
			"params": [
				{
					"description": "See http://kodi.wiki/view/InfoLabels for a list of possible info labels",
					"items": {
						"type": "string"
					},
					"minItems": 1,
					"name": "labels",
					"required": true,
					"type": "array"
				}
			],
			"returns": {
				"additionalProperties": {
					"default": "",
					"type": "string"
				},
				"description": "Object containing key-value pairs of the retrieved info labels",
				"type": "object"
			},
			"type": "method"
		}
	},
	"notifications": {
		"Application.OnVolumeChanged": {
			"description": "The volume of the application has changed.",
			"params": [
				{
					"name": "sender",
					"required": true,
					"type": "string"
				},
				{
					"name": "data",
					"properties": {
						"muted": {
							"required": true,
							"type": "boolean"
						},
						"volume": {
							"maximum": 100,
							"minimum": 0,
							"required": true,
							"type": "integer"
						}
					},
					"required": true,
					"type": "object"
				}
			],
			"returns": null,
			"type": "notification"
		},
		"AudioLibrary.OnCleanFinished": {
			"description": "The audio library has been cleaned.",
			"params": [
				{
					"name": "sender",
					"required": true,
					"type": "string"
				},
				{
					"name": "data",
					"required": true,
					"type": "null"
				}
			],
			"returns": null,
			"type": "notification"
		},
		"AudioLibrary.OnCleanStarted": {
			"description": "An audio library clean operation has started.",
			"params": [
				{
					"name": "sender",
					"required": true,
					"type": "string"
				},
				{
					"name": "data",
					"required": true,
					"type": "null"
				}
			],
			"returns": null,
			"type": "notification"
		},
		"AudioLibrary.OnExport": {
			"description": "An audio library export has finished.",
			"params": [
				{
					"name": "sender",
					"required": true,
					"type": "string"
				},
				{
					"name": "data",
					"properties": {
						"failcount": {
							"default": 0,
							"minimum": 0,
							"required": false,
							"type": "integer"
						},
						"file": {
							"default": "",
							"required": false,
							"type": "string"
						}
					},
					"required": false,
					"type": "object"
				}
			],
			"returns": null,
			"type": "notification"
		},
		"AudioLibrary.OnRemove": {
			"description": "An audio item has been removed.",
			"params": [
				{
					"name": "sender",
					"required": true,
					"type": "string"
				},
				{
					"name": "data",
					"properties": {
						"id": {
							"$ref": "Library.Id",
							"required": true
						},
						"transaction": {
							"$ref": "Optional.Boolean",
							"description": "True if the removal is being performed within a transaction."
						},
						"type": {
							"$ref": "Notifications.Library.Audio.Type",
							"required": true
						}
					},
					"required": true,
					"type": "object"
				}
			],
			"returns": null,
			"type": "notification"
		},
		"AudioLibrary.OnScanFinished": {
			"description": "Scanning the audio library has been finished.",
			"params": [
				{
					"name": "sender",
					"required": true,
					"type": "string"
				},
				{
					"name": "data",
					"required": true,
					"type": "null"
				}
			],
			"returns": null,
			"type": "notification"
		},
		"AudioLibrary.OnScanStarted": {
			"description": "An audio library scan has started.",
			"params": [
				{
					"name": "sender",
					"required": true,
					"type": "string"
				},
				{
					"name": "data",
					"required": true,
					"type": "null"
				}
			],
			"returns": null,
			"type": "notification"
		},
		"AudioLibrary.OnUpdate": {
			"description": "An audio item has been updated.",
			"params": [
				{
					"name": "sender",
					"required": true,
					"type": "string"
				},
				{
					"name": "data",
					"properties": {
						"id": {
							"$ref": "Library.Id",
							"required": true
						},
						"transaction": {
							"$ref": "Optional.Boolean",
							"description": "True if the update is being performed within a transaction."
						},
						"type": {
							"enum": [
								"song"
							],
							"id": "Notifications.Library.Audio.Type",
							"required": true,
							"type": "string"
						}
					},
					"required": true,
					"type": "object"
				}
			],
			"returns": null,
			"type": "notification"
		},
		"GUI.OnDPMSActivated": {
			"description": "Energy saving/DPMS has been activated.",
			"params": [
				{
					"name": "sender",
					"required": true,
					"type": "string"
				},
				{
					"name": "data",
					"required": true,
					"type": "null"
				}
			],
			"returns": null,
			"type": "notification"
		},
		"GUI.OnDPMSDeactivated": {
			"description": "Energy saving/DPMS has been deactivated.",
			"params": [
				{
					"name": "sender",
					"required": true,
					"type": "string"
				},
				{
					"name": "data",
					"required": true,
					"type": "null"
				}
			],
			"returns": null,
			"type": "notification"
		},
		"GUI.OnScreensaverActivated": {
			"description": "The screensaver has been activated.",
			"params": [
				{
					"name": "sender",
					"required": true,
					"type": "string"
				},
				{
					"name": "data",
					"required": true,
					"type": "null"
				}
			],
			"returns": null,
			"type": "notification"
		},
		"GUI.OnScreensaverDeactivated": {
			"description": "The screensaver has been deactivated.",
			"params": [
				{
					"name": "sender",
					"required": true,
					"type": "string"
				},
				{
					"name": "data",
					"properties": {
						"shuttingdown": {
							"required": true,
							"type": "boolean"
						}
					},
					"required": true,
					"type": "object"
				}
			],
			"returns": null,
			"type": "notification"
		},
		"Input.OnInputFinished": {
			"description": "The user has provided the requested input.",
			"params": [
				{
					"name": "sender",
					"required": true,
					"type": "string"
				},
				{
					"name": "data",
					"required": true,
					"type": "null"
				}
			],
			"returns": null,
			"type": "notification"
		},
		"Input.OnInputRequested": {
			"description": "The user is requested to provide some information.",
			"params": [
				{
					"name": "sender",
					"required": true,
					"type": "string"
				},
				{
					"name": "data",
					"properties": {
						"title": {
							"type": "string"
						},
						"type": {
							"enum": [
								"keyboard",
								"time",
								"date",
								"ip",
								"password",
								"numericpassword",
								"number",
								"seconds"
							],
							"required": true,
							"type": "string"
						},
						"value": {
							"required": true,
							"type": "string"
						}
					},
					"required": true,
					"type": "object"
				}
			],
			"returns": null,
			"type": "notification"
		},
		"Player.OnPause": {
			"description": "Playback of a media item has been paused. If there is no ID available extra information will be provided.",
			"params": [
				{
					"name": "sender",
					"required": true,
					"type": "string"
				},
				{
					"$ref": "Player.Notifications.Data",
					"name": "data",
					"required": true
				}
			],
			"returns": null,
			"type": "notification"
		},
		"Player.OnPlay": {
			"description": "Playback of a media item has been started or the playback speed has changed. If there is no ID available extra information will be provided.",
			"params": [
				{
					"name": "sender",
					"required": true,
					"type": "string"
				},
				{
					"$ref": "Player.Notifications.Data",
					"name": "data",
					"required": true
				}
			],
			"returns": null,
			"type": "notification"
		},
		"Player.OnPropertyChanged": {
			"description": "A property of the playing items has changed.",
			"params": [
				{
					"name": "sender",
					"required": true,
					"type": "string"
				},
				{
					"name": "data",
					"properties": {
						"player": {
							"$ref": "Player.Notifications.Player",
							"required": true
						},
						"property": {
							"$ref": "Player.Property.Value"
						}
					},
					"required": true,
					"type": "object"
				}
			],
			"returns": null,
			"type": "notification"
		},
		"Player.OnSeek": {
			"description": "The playback position has been changed. If there is no ID available extra information will be provided.",
			"params": [
				{
					"name": "sender",
					"required": true,
					"type": "string"
				},
				{
					"name": "data",
					"properties": {
						"item": {
							"$ref": "Notifications.Item"
						},
						"player": {
							"$ref": "Player.Notifications.Player.Seek",
							"required": true
						}
					},
					"required": true,
					"type": "object"
				}
			],
			"returns": null,
			"type": "notification"
		},
		"Player.OnSpeedChanged": {
			"description": "Speed of the playback of a media item has been changed. If there is no ID available extra information will be provided.",
			"params": [
				{
					"name": "sender",
					"required": true,
					"type": "string"
				},
				{
					"$ref": "Player.Notifications.Data",
					"name": "data",
					"required": true
				}
			],
			"returns": null,
			"type": "notification"
		},
		"Player.OnStop": {
			"description": "Playback of a media item has been stopped. If there is no ID available extra information will be provided.",
			"params": [
				{
					"name": "sender",
					"required": true,
					"type": "string"
				},
				{
					"name": "data",
					"properties": {
						"end": {
							"description": "Whether the player has reached the end of the playable item(s) or not",
							"required": true,
							"type": "boolean"
						},
						"item": {
							"$ref": "Notifications.Item"
						}
					},
					"required": true,
					"type": "object"
				}
			],
			"returns": null,
			"type": "notification"
		},
		"Playlist.OnAdd": {
			"description": "A playlist item has been added.",
			"params": [
				{
					"name": "sender",
					"required": true,
					"type": "string"
				},
				{
					"name": "data",
					"properties": {
						"item": {
							"$ref": "Notifications.Item"
						},
						"playlistid": {
							"$ref": "Playlist.Id",
							"required": true
						},
						"position": {
							"$ref": "Playlist.Position"
						}
					},
					"required": true,
					"type": "object"
				}
			],
			"returns": null,
			"type": "notification"
		},
		"Playlist.OnClear": {
			"description": "A playlist item has been cleared.",
			"params": [
				{
					"name": "sender",
					"required": true,
					"type": "string"
				},
				{
					"name": "data",
					"properties": {
						"playlistid": {
							"$ref": "Playlist.Id",
							"required": true
						}
					},
					"required": true,
					"type": "object"
				}
			],
			"returns": null,
			"type": "notification"
		},
		"Playlist.OnRemove": {
			"description": "A playlist item has been removed.",
			"params": [
				{
					"name": "sender",
					"required": true,
					"type": "string"
				},
				{
					"name": "data",
					"properties": {
						"playlistid": {
							"$ref": "Playlist.Id",
							"required": true
						},
						"position": {
							"$ref": "Playlist.Position"
						}
					},
					"required": true,
					"type": "object"
				}
			],
			"returns": null,
			"type": "notification"
		},
		"System.OnLowBattery": {
			"description": "The system is on low battery.",
			"params": [
				{
					"name": "sender",
					"required": true,
					"type": "string"
				},
				{
					"name": "data",
					"required": true,
					"type": "null"
				}
			],
			"returns": null,
			"type": "notification"
		},
		"System.OnQuit": {
			"description": "Kodi will be closed.",
			"params": [
				{
					"name": "sender",
					"required": true,
					"type": "string"
				},
				{
					"name": "data",
					"properties": {
						"exitcode": {
							"minimum": 0,
							"required": true,
							"type": "integer"
						}
					},
					"required": true,
					"type": "object"
				}
			],
			"returns": null,
			"type": "notification"
		},
		"System.OnRestart": {
			"description": "The system will be restarted.",
			"params": [
				{
					"name": "sender",
					"required": true,
					"type": "string"
				},
				{
					"name": "data",
					"required": true,
					"type": "null"
				}
			],
			"returns": null,
			"type": "notification"
		},
		"System.OnSleep": {
			"description": "The system will be suspended.",
			"params": [
				{
					"name": "sender",
					"required": true,
					"type": "string"
				},
				{
					"name": "data",
					"required": true,
					"type": "null"
				}
			],
			"returns": null,
			"type": "notification"
		},
		"System.OnWake": {
			"description": "The system woke up from suspension.",
			"params": [
				{
					"name": "sender",
					"required": true,
					"type": "string"
				},
				{
					"name": "data",
					"required": true,
					"type": "null"
				}
			],
			"returns": null,
			"type": "notification"
		},
		"VideoLibrary.OnCleanFinished": {
			"description": "The video library has been cleaned.",
			"params": [
				{
					"name": "sender",
					"required": true,
					"type": "string"
				},
				{
					"name": "data",
					"required": true,
					"type": "null"
				}
			],
			"returns": null,
			"type": "notification"
		},
		"VideoLibrary.OnCleanStarted": {
			"description": "A video library clean operation has started.",
			"params": [
				{
					"name": "sender",
					"required": true,
					"type": "string"
				},
				{
					"name": "data",
					"required": true,
					"type": "null"
				}
			],
			"returns": null,
			"type": "notification"
		},
		"VideoLibrary.OnExport": {
			"description": "A video library export has finished.",
			"params": [
				{
					"name": "sender",
					"required": true,
					"type": "string"
				},
				{
					"name": "data",
					"properties": {
						"failcount": {
							"default": 0,
							"minimum": 0,
							"required": false,
							"type": "integer"
						},
						"file": {
							"default": "",
							"required": false,
							"type": "string"
						},
						"root": {
							"default": "",
							"required": false,
							"type": "string"
						}
					},
					"required": false,
					"type": "object"
				}
			],
			"returns": null,
			"type": "notification"
		},
		"VideoLibrary.OnRemove": {
			"description": "A video item has been removed.",
			"params": [
				{
					"name": "sender",
					"required": true,
					"type": "string"
				},
				{
					"name": "data",
					"properties": {
						"id": {
							"$ref": "Library.Id",
							"required": true
						},
						"transaction": {
							"$ref": "Optional.Boolean",
							"description": "True if the removal is being performed within a transaction."
						},
						"type": {
							"$ref": "Notifications.Library.Video.Type",
							"required": true
						}
					},
					"required": true,
					"type": "object"
				}
			],
			"returns": null,
			"type": "notification"
		},
		"VideoLibrary.OnScanFinished": {
			"description": "Scanning the video library has been finished.",
			"params": [
				{
					"name": "sender",
					"required": true,
					"type": "string"
				},
				{
					"name": "data",
					"required": true,
					"type": "null"
				}
			],
			"returns": null,
			"type": "notification"
		},
		"VideoLibrary.OnScanStarted": {
			"description": "A video library scan has started.",
			"params": [
				{
					"name": "sender",
					"required": true,
					"type": "string"
				},
				{
					"name": "data",
					"required": true,
					"type": "null"
				}
			],
			"returns": null,
			"type": "notification"
		},
		"VideoLibrary.OnUpdate": {
			"description": "A video item has been updated.",
			"params": [
				{
					"name": "sender",
					"required": true,
					"type": "string"
				},
				{
					"name": "data",
					"properties": {
						"id": {
							"$ref": "Library.Id",
							"required": true
						},
						"playcount": {
							"default": -1,
							"minimum": 0,
							"type": "integer"
						},
						"transaction": {
							"$ref": "Optional.Boolean",
							"description": "True if the update is being performed within a transaction."
						},
						"type": {
							"enum": [
								"movie",
								"tvshow",
								"episode",
								"musicvideo"
							],
							"id": "Notifications.Library.Video.Type",
							"required": true,
							"type": "string"
						}
					},
					"required": true,
					"type": "object"
				}
			],
			"returns": null,
			"type": "notification"
		}
	},
	"types": {
		"Addon.Content": {
			"default": "unknown",
			"enums": [
				"unknown",
				"video",
				"audio",
				"image",
				"executable"
			],
			"id": "Addon.Content",
			"type": "string"
		},
		"Addon.Details": {
			"extends": "Item.Details.Base",
			"id": "Addon.Details",
			"properties": {
				"addonid": {
					"required": true,
					"type": "string"
				},
				"author": {
					"default": "",
					"type": "string"
				},
				"broken": {
					"default": null,
					"type": [
						{
							"type": "boolean"
						},
						{
							"type": "string"
						}
					]
				},
				"dependencies": {
					"items": {
						"properties": {
							"addonid": {
								"required": true,
								"type": "string"
							},
							"optional": {
								"required": true,
								"type": "boolean"
							},
							"version": {
								"required": true,
								"type": "string"
							}
						},
						"type": "object"
					},
					"type": "array"
				},
				"description": {
					"default": "",
					"type": "string"
				},
				"disclaimer": {
					"default": "",
					"type": "string"
				},
				"enabled": {
					"default": false,
					"type": "boolean"
				},
				"extrainfo": {
					"items": {
						"properties": {
							"key": {
								"required": true,
								"type": "string"
							},
							"value": {
								"required": true,
								"type": "string"
							}
						},
						"type": "object"
					},
					"type": "array"
				},
				"fanart": {
					"default": "",
					"type": "string"
				},
				"installed": {
					"default": false,
					"type": "boolean"
				},
				"name": {
					"default": "",
					"type": "string"
				},
				"path": {
					"default": "",
					"type": "string"
				},
				"rating": {
					"default": 0,
					"type": "integer"
				},
				"summary": {
					"default": "",
					"type": "string"
				},
				"thumbnail": {
					"default": "",
					"type": "string"
				},
				"type": {
					"$ref": "Addon.Types",
					"required": true
				},
				"version": {
					"default": "",
					"type": "string"
				}
			}
		},
		"Addon.Fields": {
			"extends": "Item.Fields.Base",
			"id": "Addon.Fields",
			"items": {
				"enums": [
					"name",
					"version",
					"summary",
					"description",
					"path",
					"author",
					"thumbnail",
					"disclaimer",
					"fanart",
					"dependencies",
					"broken",
					"extrainfo",
					"rating",
					"enabled",
					"installed"
				],
				"type": "string"
			}
		},
		"Addon.Types": {
			"default": "unknown",
			"enums": [
				"unknown",
				"xbmc.player.musicviz",
				"xbmc.gui.skin",
				"xbmc.pvrclient",
				"kodi.adsp",
				"kodi.inputstream",
				"kodi.peripheral",
				"xbmc.python.script",
				"xbmc.python.weather",
				"xbmc.subtitle.module",
				"xbmc.python.lyrics",
				"xbmc.metadata.scraper.albums",
				"xbmc.metadata.scraper.artists",
				"xbmc.metadata.scraper.movies",
				"xbmc.metadata.scraper.musicvideos",
				"xbmc.metadata.scraper.tvshows",
				"xbmc.ui.screensaver",
				"xbmc.python.pluginsource",
				"xbmc.addon.repository",
				"xbmc.webinterface",
				"xbmc.service",
				"xbmc.audioencoder",
				"kodi.context.item",
				"kodi.audiodecoder",
				"kodi.resource.images",
				"kodi.resource.language",
				"kodi.resource.uisounds",
				"xbmc.addon.video",
				"xbmc.addon.audio",
				"xbmc.addon.image",
				"xbmc.addon.executable",
				"xbmc.metadata.scraper.library",
				"xbmc.python.library",
				"xbmc.python.module",
				"kodi.game.controller"
			],
			"id": "Addon.Types",
			"type": "string"
		},
		"Application.Property.Name": {
			"default": "volume",
			"enums": [
				"volume",
				"muted",
				"name",
				"version"
			],
			"id": "Application.Property.Name",
			"type": "string"
		},
		"Application.Property.Value": {
			"id": "Application.Property.Value",
			"properties": {
				"muted": {
					"default": false,
					"type": "boolean"
				},
				"name": {
					"default": "",
					"minLength": 1,
					"type": "string"
				},
				"version": {
					"properties": {
						"major": {
							"minimum": 0,
							"required": true,
							"type": "integer"
						},
						"minor": {
							"minimum": 0,
							"required": true,
							"type": "integer"
						},
						"revision": {
							"default": null,
							"type": [
								{
									"type": "string"
								},
								{
									"type": "integer"
								}
							]
						},
						"tag": {
							"enums": [
								"prealpha",
								"alpha",
								"beta",
								"releasecandidate",
								"stable"
							],
							"required": true,
							"type": "string"
						},
						"tagversion": {
							"default": "",
							"type": "string"
						}
					},
					"type": "object"
				},
				"volume": {
					"default": 0,
					"maximum": 100,
					"minimum": 0,
					"type": "integer"
				}
			},
			"type": "object"
		},
		"Array.Integer": {
			"id": "Array.Integer",
			"items": {
				"type": "integer"
			},
			"type": "array"
		},
		"Array.String": {
			"id": "Array.String",
			"items": {
				"minLength": 1,
				"type": "string"
			},
			"type": "array"
		},
		"Audio.Album.ReleaseType": {
			"default": "album",
			"enums": [
				"album",
				"single"
			],
			"id": "Audio.Album.ReleaseType",
			"type": "string"
		},
		"Audio.Artist.Roles": {
			"id": "Audio.Artist.Roles",
			"items": {
				"additionalProperties": false,
				"description": "The various roles contributed by an artist to one or more songs",
				"properties": {
					"role": {
						"required": true,
						"type": "string"
					},
					"roleid": {
						"$ref": "Library.Id",
						"required": true
					}
				},
				"type": "object"
			},
			"type": "array"
		},
		"Audio.Contributors": {
			"id": "Audio.Contributors",
			"items": {
				"additionalProperties": false,
				"description": "The artist and the role they contribute to a song",
				"properties": {
					"artistid": {
						"$ref": "Library.Id",
						"required": true
					},
					"name": {
						"required": true,
						"type": "string"
					},
					"role": {
						"required": true,
						"type": "string"
					},
					"roleid": {
						"$ref": "Library.Id",
						"required": true
					}
				},
				"type": "object"
			},
			"type": "array"
		},
		"Audio.Details.Album": {
			"extends": "Audio.Details.Media",
			"id": "Audio.Details.Album",
			"properties": {
				"albumid": {
					"$ref": "Library.Id",
					"required": true
				},
				"albumlabel": {
					"default": "",
					"type": "string"
				},
				"compilation": {
					"default": false,
					"type": "boolean"
				},
				"description": {
					"default": "",
					"type": "string"
				},
				"mood": {
					"$ref": "Array.String"
				},
				"playcount": {
					"default": 0,
					"type": "integer"
				},
				"releasetype": {
					"$ref": "Audio.Album.ReleaseType",
					"default": "album"
				},
				"style": {
					"$ref": "Array.String"
				},
				"theme": {
					"$ref": "Array.String"
				},
				"type": {
					"default": "",
					"type": "string"
				}
			}
		},
		"Audio.Details.Artist": {
			"extends": "Audio.Details.Base",
			"id": "Audio.Details.Artist",
			"properties": {
				"artist": {
					"required": true,
					"type": "string"
				},
				"artistid": {
					"$ref": "Library.Id",
					"required": true
				},
				"born": {
					"default": "",
					"type": "string"
				},
				"compilationartist": {
					"default": false,
					"type": "boolean"
				},
				"description": {
					"default": "",
					"type": "string"
				},
				"died": {
					"default": "",
					"type": "string"
				},
				"disbanded": {
					"default": "",
					"type": "string"
				},
				"formed": {
					"default": "",
					"type": "string"
				},
				"instrument": {
					"$ref": "Array.String"
				},
				"isalbumartist": {
					"default": false,
					"type": "boolean"
				},
				"mood": {
					"$ref": "Array.String"
				},
				"musicbrainzartistid": {
					"default": "",
					"type": "string"
				},
				"roles": {
					"$ref": "Audio.Artist.Roles"
				},
				"songgenres": {
					"$ref": "Audio.Details.Genres"
				},
				"style": {
					"$ref": "Array.String"
				},
				"yearsactive": {
					"$ref": "Array.String"
				}
			}
		},
		"Audio.Details.Base": {
			"extends": "Media.Details.Base",
			"id": "Audio.Details.Base",
			"properties": {
				"dateadded": {
					"default": "",
					"type": "string"
				},
				"genre": {
					"$ref": "Array.String"
				}
			}
		},
		"Audio.Details.Genres": {
			"id": "Audio.Details.Genres",
			"items": {
				"properties": {
					"genreid": {
						"$ref": "Library.Id",
						"required": true
					},
					"title": {
						"default": "",
						"type": "string"
					}
				},
				"type": "object"
			},
			"type": "array"
		},
		"Audio.Details.Media": {
			"extends": "Audio.Details.Base",
			"id": "Audio.Details.Media",
			"properties": {
				"artist": {
					"$ref": "Array.String"
				},
				"artistid": {
					"$ref": "Array.Integer"
				},
				"displayartist": {
					"default": "",
					"type": "string"
				},
				"genreid": {
					"$ref": "Array.Integer"
				},
				"musicbrainzalbumartistid": {
					"default": "",
					"type": "string"
				},
				"musicbrainzalbumid": {
					"default": "",
					"type": "string"
				},
				"rating": {
					"default": 0,
					"type": "number"
				},
				"title": {
					"default": "",
					"type": "string"
				},
				"userrating": {
					"default": 0,
					"type": "integer"
				},
				"votes": {
					"default": 0,
					"type": "integer"
				},
				"year": {
					"default": 0,
					"type": "integer"
				}
			}
		},
		"Audio.Details.Role": {
			"extends": "Item.Details.Base",
			"id": "Audio.Details.Role",
			"properties": {
				"roleid": {
					"$ref": "Library.Id",
					"required": true
				},
				"title": {
					"default": "",
					"type": "string"
				}
			}
		},
		"Audio.Details.Song": {
			"extends": "Audio.Details.Media",
			"id": "Audio.Details.Song",
			"properties": {
				"album": {
					"default": "",
					"type": "string"
				},
				"albumartist": {
					"$ref": "Array.String"
				},
				"albumartistid": {
					"$ref": "Array.Integer"
				},
				"albumid": {
					"$ref": "Library.Id",
					"default": -1
				},
				"albumreleasetype": {
					"$ref": "Audio.Album.ReleaseType",
					"default": "album"
				},
				"comment": {
					"default": "",
					"type": "string"
				},
				"contributors": {
					"$ref": "Audio.Contributors"
				},
				"disc": {
					"default": 0,
					"type": "integer"
				},
				"displaycomposer": {
					"default": "",
					"type": "string"
				},
				"displayconductor": {
					"default": "",
					"type": "string"
				},
				"displaylyricist": {
					"default": "",
					"type": "string"
				},
				"displayorchestra": {
					"default": "",
					"type": "string"
				},
				"duration": {
					"default": 0,
					"type": "integer"
				},
				"file": {
					"default": "",
					"type": "string"
				},
				"lastplayed": {
					"default": "",
					"type": "string"
				},
				"lyrics": {
					"default": "",
					"type": "string"
				},
				"mood": {
					"default": "",
					"type": "string"
				},
				"musicbrainzartistid": {
					"default": "",
					"type": "string"
				},
				"musicbrainztrackid": {
					"default": "",
					"type": "string"
				},
				"playcount": {
					"default": 0,
					"type": "integer"
				},
				"songid": {
					"$ref": "Library.Id",
					"required": true
				},
				"track": {
					"default": 0,
					"type": "integer"
				}
			}
		},
		"Audio.Fields.Album": {
			"extends": "Item.Fields.Base",
			"id": "Audio.Fields.Album",
			"items": {
				"description": "Requesting the genreid and/or artistid field will result in increased response times",
				"enums": [
					"title",
					"description",
					"artist",
					"genre",
					"theme",
					"mood",
					"style",
					"type",
					"albumlabel",
					"rating",
					"votes",
					"userrating",
					"year",
					"musicbrainzalbumid",
					"musicbrainzalbumartistid",
					"fanart",
					"thumbnail",
					"playcount",
					"genreid",
					"artistid",
					"displayartist",
					"compilation",
					"releasetype",
					"dateadded"
				],
				"type": "string"
			}
		},
		"Audio.Fields.Artist": {
			"extends": "Item.Fields.Base",
			"id": "Audio.Fields.Artist",
			"items": {
				"description": "Requesting the (song)genreid/genre, or roleid/role fields will result in increased response times",
				"enums": [
					"instrument",
					"style",
					"mood",
					"born",
					"formed",
					"description",
					"genre",
					"died",
					"disbanded",
					"yearsactive",
					"musicbrainzartistid",
					"fanart",
					"thumbnail",
					"compilationartist",
					"dateadded",
					"roles",
					"songgenres",
					"isalbumartist"
				],
				"type": "string"
			}
		},
		"Audio.Fields.Role": {
			"extends": "Item.Fields.Base",
			"id": "Audio.Fields.Role",
			"items": {
				"enums": [
					"title"
				],
				"type": "string"
			}
		},
		"Audio.Fields.Song": {
			"extends": "Item.Fields.Base",
			"id": "Audio.Fields.Song",
			"items": {
				"description": "Requesting the genreid, artistid and/or albumartistid field will result in increased response times",
				"enums": [
					"title",
					"artist",
					"albumartist",
					"genre",
					"year",
					"rating",
					"album",
					"track",
					"duration",
					"comment",
					"lyrics",
					"musicbrainztrackid",
					"musicbrainzartistid",
					"musicbrainzalbumid",
					"musicbrainzalbumartistid",
					"playcount",
					"fanart",
					"thumbnail",
					"file",
					"albumid",
					"lastplayed",
					"disc",
					"genreid",
					"artistid",
					"displayartist",
					"albumartistid",
					"albumreleasetype",
					"dateadded",
					"votes",
					"userrating",
					"mood",
					"contributors",
					"displaycomposer",
					"displayconductor",
					"displayorchestra",
					"displaylyricist"
				],
				"type": "string"
			}
		},
		"Audio.Property.Name": {
			"default": "missingartistid",
			"enums": [
				"missingartistid"
			],
			"id": "Audio.Property.Name",
			"type": "string"
		},
		"Audio.Property.Value": {
			"id": "Audio.Property.Value",
			"properties": {
				"missingartistid": {
					"$ref": "Library.Id",
					"default": -1
				}
			},
			"type": "object"
		},
		"Configuration": {
			"id": "Configuration",
			"properties": {
				"notifications": {
					"$ref": "Configuration.Notifications",
					"required": true
				}
			},
			"required": true,
			"type": "object"
		},
		"Configuration.Notifications": {
			"additionalProperties": false,
			"id": "Configuration.Notifications",
			"properties": {
				"application": {
					"required": true,
					"type": "boolean"
				},
				"audiolibrary": {
					"required": true,
					"type": "boolean"
				},
				"gui": {
					"required": true,
					"type": "boolean"
				},
				"input": {
					"required": true,
					"type": "boolean"
				},
				"other": {
					"required": true,
					"type": "boolean"
				},
				"player": {
					"required": true,
					"type": "boolean"
				},
				"playlist": {
					"required": true,
					"type": "boolean"
				},
				"pvr": {
					"required": true,
					"type": "boolean"
				},
				"system": {
					"required": true,
					"type": "boolean"
				},
				"videolibrary": {
					"required": true,
					"type": "boolean"
				}
			},
			"type": "object"
		},
		"Favourite.Details.Favourite": {
			"additionalProperties": false,
			"id": "Favourite.Details.Favourite",
			"properties": {
				"path": {
					"default": "",
					"type": "string"
				},
				"thumbnail": {
					"default": "",
					"type": "string"
				},
				"title": {
					"required": true,
					"type": "string"
				},
				"type": {
					"$ref": "Favourite.Type",
					"required": true
				},
				"window": {
					"default": "",
					"type": "string"
				},
				"windowparameter": {
					"default": "",
					"type": "string"
				}
			},
			"type": "object"
		},
		"Favourite.Fields.Favourite": {
			"extends": "Item.Fields.Base",
			"id": "Favourite.Fields.Favourite",
			"items": {
				"enums": [
					"window",
					"windowparameter",
					"thumbnail",
					"path"
				],
				"type": "string"
			}
		},
		"Favourite.Type": {
			"default": "media",
			"enums": [
				"media",
				"window",
				"script",
				"unknown"
			],
			"id": "Favourite.Type",
			"type": "string"
		},
		"Files.Media": {
			"default": "video",
			"enums": [
				"video",
				"music",
				"pictures",
				"files",
				"programs"
			],
			"id": "Files.Media",
			"type": "string"
		},
		"GUI.Property.Name": {
			"default": "currentwindow",
			"enums": [
				"currentwindow",
				"currentcontrol",
				"skin",
				"fullscreen",
				"stereoscopicmode"
			],
			"id": "GUI.Property.Name",
			"type": "string"
		},
		"GUI.Property.Value": {
			"id": "GUI.Property.Value",
			"properties": {
				"currentcontrol": {
					"properties": {
						"label": {
							"required": true,
							"type": "string"
						}
					},
					"type": "object"
				},
				"currentwindow": {
					"properties": {
						"id": {
							"required": true,
							"type": "integer"
						},
						"label": {
							"required": true,
							"type": "string"
						}
					},
					"type": "object"
				},
				"fullscreen": {
					"default": false,
					"type": "boolean"
				},
				"skin": {
					"properties": {
						"id": {
							"minLength": 1,
							"required": true,
							"type": "string"
						},
						"name": {
							"default": "",
							"type": "string"
						}
					},
					"type": "object"
				},
				"stereoscopicmode": {
					"$ref": "GUI.Stereoscopy.Mode"
				}
			},
			"type": "object"
		},
		"GUI.Stereoscopy.Mode": {
			"id": "GUI.Stereoscopy.Mode",
			"properties": {
				"label": {
					"required": true,
					"type": "string"
				},
				"mode": {
					"enums": [
						"off",
						"split_vertical",
						"split_horizontal",
						"row_interleaved",
						"hardware_based",
						"anaglyph_cyan_red",
						"anaglyph_green_magenta",
						"anaglyph_yellow_blue",
						"monoscopic"
					],
					"required": true,
					"type": "string"
				}
			},
			"type": "object"
		},
		"GUI.Window": {
			"default": "home",
			"enums": [
				"home",
				"programs",
				"pictures",
				"filemanager",
				"settings",
				"music",
				"videos",
				"tvchannels",
				"tvrecordings",
				"tvguide",
				"tvtimers",
				"tvsearch",
				"radiochannels",
				"radiorecordings",
				"radioguide",
				"radiotimers",
				"radiosearch",
				"gamecontrollers",
				"pvrguideinfo",
				"pvrrecordinginfo",
				"pvrradiordsinfo",
				"pvrtimersetting",
				"pvrgroupmanager",
				"pvrchannelmanager",
				"pvrguidesearch",
				"pvrchannelscan",
				"pvrupdateprogress",
				"pvrosdchannels",
				"pvrosdguide",
				"pvrosdteletext",
				"systeminfo",
				"testpattern",
				"screencalibration",
				"systemsettings",
				"servicesettings",
				"pvrsettings",
				"playersettings",
				"mediasettings",
				"interfacesettings",
				"appearancesettings",
				"videoplaylist",
				"loginscreen",
				"profiles",
				"skinsettings",
				"addonbrowser",
				"yesnodialog",
				"progressdialog",
				"virtualkeyboard",
				"volumebar",
				"submenu",
				"favourites",
				"contextmenu",
				"notification",
				"numericinput",
				"gamepadinput",
				"shutdownmenu",
				"playercontrols",
				"playerprocessinfo",
				"seekbar",
				"musicosd",
				"addonsettings",
				"visualisationpresetlist",
				"osdcmssettings",
				"osdvideosettings",
				"osdaudiosettings",
				"audiodspmanager",
				"osdaudiodspsettings",
				"videobookmarks",
				"filebrowser",
				"networksetup",
				"mediasource",
				"profilesettings",
				"locksettings",
				"contentsettings",
				"songinformation",
				"smartplaylisteditor",
				"smartplaylistrule",
				"busydialog",
				"pictureinfo",
				"accesspoints",
				"fullscreeninfo",
				"sliderdialog",
				"addoninformation",
				"subtitlesearch",
				"musicplaylist",
				"musicplaylisteditor",
				"teletext",
				"selectdialog",
				"musicinformation",
				"okdialog",
				"movieinformation",
				"textviewer",
				"fullscreenvideo",
				"fullscreenlivetv",
				"fullscreenradio",
				"visualisation",
				"slideshow",
				"weather",
				"screensaver",
				"videoosd",
				"videomenu",
				"videotimeseek",
				"startwindow",
				"startup",
				"peripheralsettings",
				"extendedprogressdialog",
				"mediafilter",
				"addon",
				"eventlog",
				"tvtimerrules",
				"radiotimerrules"
			],
			"id": "GUI.Window",
			"type": "string"
		},
		"Global.IncrementDecrement": {
			"default": "increment",
			"enums": [
				"increment",
				"decrement"
			],
			"id": "Global.IncrementDecrement",
			"type": "string"
		},
		"Global.String.NotEmpty": {
			"default": "",
			"id": "Global.String.NotEmpty",
			"minLength": 1,
			"type": "string"
		},
		"Global.Time": {
			"additionalProperties": false,
			"id": "Global.Time",
			"properties": {
				"hours": {
					"maximum": 23,
					"minimum": 0,
					"required": true,
					"type": "integer"
				},
				"milliseconds": {
					"maximum": 999,
					"minimum": 0,
					"required": true,
					"type": "integer"
				},
				"minutes": {
					"maximum": 59,
					"minimum": 0,
					"required": true,
					"type": "integer"
				},
				"seconds": {
					"maximum": 59,
					"minimum": 0,
					"required": true,
					"type": "integer"
				}
			},
			"type": "object"
		},
		"Global.Toggle": {
			"default": null,
			"id": "Global.Toggle",
			"type": [
				{
					"type": "boolean"
				},
				{
					"enums": [
						"toggle"
					],
					"type": "string"
				}
			]
		},
		"Global.Weekday": {
			"default": "monday",
			"enums": [
				"monday",
				"tuesday",
				"wednesday",
				"thursday",
				"friday",
				"saturday",
				"sunday"
			],
			"id": "Global.Weekday",
			"type": "string"
		},
		"Input.Action": {
			"default": "left",
			"enums": [
				"left",
				"right",
				"up",
				"down",
				"pageup",
				"pagedown",
				"select",
				"highlight",
				"parentdir",
				"parentfolder",
				"back",
				"menu",
				"previousmenu",
				"info",
				"pause",
				"stop",
				"skipnext",
				"skipprevious",
				"fullscreen",
				"aspectratio",
				"stepforward",
				"stepback",
				"bigstepforward",
				"bigstepback",
				"chapterorbigstepforward",
				"chapterorbigstepback",
				"osd",
				"showsubtitles",
				"nextsubtitle",
				"cyclesubtitle",
				"playerdebug",
				"codecinfo",
				"playerprocessinfo",
				"nextpicture",
				"previouspicture",
				"zoomout",
				"zoomin",
				"playlist",
				"queue",
				"zoomnormal",
				"zoomlevel1",
				"zoomlevel2",
				"zoomlevel3",
				"zoomlevel4",
				"zoomlevel5",
				"zoomlevel6",
				"zoomlevel7",
				"zoomlevel8",
				"zoomlevel9",
				"nextcalibration",
				"resetcalibration",
				"analogmove",
				"analogmovex",
				"analogmovey",
				"rotate",
				"rotateccw",
				"close",
				"subtitledelayminus",
				"subtitledelay",
				"subtitledelayplus",
				"audiodelayminus",
				"audiodelay",
				"audiodelayplus",
				"subtitleshiftup",
				"subtitleshiftdown",
				"subtitlealign",
				"audionextlanguage",
				"verticalshiftup",
				"verticalshiftdown",
				"nextresolution",
				"audiotoggledigital",
				"number0",
				"number1",
				"number2",
				"number3",
				"number4",
				"number5",
				"number6",
				"number7",
				"number8",
				"number9",
				"smallstepback",
				"fastforward",
				"rewind",
				"play",
				"playpause",
				"switchplayer",
				"delete",
				"copy",
				"move",
				"screenshot",
				"rename",
				"togglewatched",
				"scanitem",
				"reloadkeymaps",
				"volumeup",
				"volumedown",
				"mute",
				"backspace",
				"scrollup",
				"scrolldown",
				"analogfastforward",
				"analogrewind",
				"moveitemup",
				"moveitemdown",
				"contextmenu",
				"shift",
				"symbols",
				"cursorleft",
				"cursorright",
				"showtime",
				"analogseekforward",
				"analogseekback",
				"showpreset",
				"nextpreset",
				"previouspreset",
				"lockpreset",
				"randompreset",
				"increasevisrating",
				"decreasevisrating",
				"showvideomenu",
				"enter",
				"increaserating",
				"decreaserating",
				"setrating",
				"togglefullscreen",
				"nextscene",
				"previousscene",
				"nextletter",
				"prevletter",
				"jumpsms2",
				"jumpsms3",
				"jumpsms4",
				"jumpsms5",
				"jumpsms6",
				"jumpsms7",
				"jumpsms8",
				"jumpsms9",
				"filter",
				"filterclear",
				"filtersms2",
				"filtersms3",
				"filtersms4",
				"filtersms5",
				"filtersms6",
				"filtersms7",
				"filtersms8",
				"filtersms9",
				"firstpage",
				"lastpage",
				"guiprofile",
				"red",
				"green",
				"yellow",
				"blue",
				"increasepar",
				"decreasepar",
				"volampup",
				"volampdown",
				"volumeamplification",
				"createbookmark",
				"createepisodebookmark",
				"settingsreset",
				"settingslevelchange",
				"stereomode",
				"nextstereomode",
				"previousstereomode",
				"togglestereomode",
				"stereomodetomono",
				"channelup",
				"channeldown",
				"previouschannelgroup",
				"nextchannelgroup",
				"playpvr",
				"playpvrtv",
				"playpvrradio",
				"record",
				"togglecommskip",
				"showtimerrule",
				"leftclick",
				"rightclick",
				"middleclick",
				"doubleclick",
				"longclick",
				"wheelup",
				"wheeldown",
				"mousedrag",
				"mousemove",
				"tap",
				"longpress",
				"pangesture",
				"zoomgesture",
				"rotategesture",
				"swipeleft",
				"swiperight",
				"swipeup",
				"swipedown",
				"error",
				"noop"
			],
			"id": "Input.Action",
			"type": "string"
		},
		"Item.Details.Base": {
			"id": "Item.Details.Base",
			"properties": {
				"label": {
					"required": true,
					"type": "string"
				}
			},
			"type": "object"
		},
		"Item.Fields.Base": {
			"id": "Item.Fields.Base",
			"items": {
				"type": "string"
			},
			"type": "array",
			"uniqueItems": true
		},
		"Library.Details.Genre": {
			"extends": "Item.Details.Base",
			"id": "Library.Details.Genre",
			"properties": {
				"genreid": {
					"$ref": "Library.Id",
					"required": true
				},
				"thumbnail": {
					"default": "",
					"type": "string"
				},
				"title": {
					"default": "",
					"type": "string"
				}
			}
		},
		"Library.Details.Tag": {
			"extends": "Item.Details.Base",
			"id": "Library.Details.Tag",
			"properties": {
				"tagid": {
					"$ref": "Library.Id",
					"required": true
				},
				"title": {
					"default": "",
					"type": "string"
				}
			}
		},
		"Library.Fields.Genre": {
			"extends": "Item.Fields.Base",
			"id": "Library.Fields.Genre",
			"items": {
				"enums": [
					"title",
					"thumbnail"
				],
				"type": "string"
			}
		},
		"Library.Fields.Tag": {
			"extends": "Item.Fields.Base",
			"id": "Library.Fields.Tag",
			"items": {
				"enums": [
					"title"
				],
				"type": "string"
			}
		},
		"Library.Id": {
			"default": -1,
			"id": "Library.Id",
			"minimum": 1,
			"type": "integer"
		},
		"List.Amount": {
			"default": -1,
			"id": "List.Amount",
			"minimum": 0,
			"type": "integer"
		},
		"List.Fields.All": {
			"extends": "Item.Fields.Base",
			"id": "List.Fields.All",
			"items": {
				"enums": [
					"title",
					"artist",
					"albumartist",
					"genre",
					"year",
					"rating",
					"album",
					"track",
					"duration",
					"comment",
					"lyrics",
					"musicbrainztrackid",
					"musicbrainzartistid",
					"musicbrainzalbumid",
					"musicbrainzalbumartistid",
					"playcount",
					"fanart",
					"director",
					"trailer",
					"tagline",
					"plot",
					"plotoutline",
					"originaltitle",
					"lastplayed",
					"writer",
					"studio",
					"mpaa",
					"cast",
					"country",
					"imdbnumber",
					"premiered",
					"productioncode",
					"runtime",
					"set",
					"showlink",
					"streamdetails",
					"top250",
					"votes",
					"firstaired",
					"season",
					"episode",
					"showtitle",
					"thumbnail",
					"file",
					"resume",
					"artistid",
					"albumid",
					"tvshowid",
					"setid",
					"watchedepisodes",
					"disc",
					"tag",
					"art",
					"genreid",
					"displayartist",
					"albumartistid",
					"description",
					"theme",
					"mood",
					"style",
					"albumlabel",
					"sorttitle",
					"episodeguide",
					"uniqueid",
					"dateadded",
					"channel",
					"channeltype",
					"hidden",
					"locked",
					"channelnumber",
					"starttime",
					"endtime",
					"specialsortseason",
					"specialsortepisode",
					"compilation",
					"releasetype",
					"albumreleasetype",
					"contributors",
					"displaycomposer",
					"displayconductor",
					"displayorchestra",
					"displaylyricist",
					"userrating"
				],
				"type": "string"
			}
		},
		"List.Fields.Files": {
			"extends": "Item.Fields.Base",
			"id": "List.Fields.Files",
			"items": {
				"enums": [
					"title",
					"artist",
					"albumartist",
					"genre",
					"year",
					"rating",
					"album",
					"track",
					"duration",
					"comment",
					"lyrics",
					"musicbrainztrackid",
					"musicbrainzartistid",
					"musicbrainzalbumid",
					"musicbrainzalbumartistid",
					"playcount",
					"fanart",
					"director",
					"trailer",
					"tagline",
					"plot",
					"plotoutline",
					"originaltitle",
					"lastplayed",
					"writer",
					"studio",
					"mpaa",
					"cast",
					"country",
					"imdbnumber",
					"premiered",
					"productioncode",
					"runtime",
					"set",
					"showlink",
					"streamdetails",
					"top250",
					"votes",
					"firstaired",
					"season",
					"episode",
					"showtitle",
					"thumbnail",
					"file",
					"resume",
					"artistid",
					"albumid",
					"tvshowid",
					"setid",
					"watchedepisodes",
					"disc",
					"tag",
					"art",
					"genreid",
					"displayartist",
					"albumartistid",
					"description",
					"theme",
					"mood",
					"style",
					"albumlabel",
					"sorttitle",
					"episodeguide",
					"uniqueid",
					"dateadded",
					"size",
					"lastmodified",
					"mimetype",
					"specialsortseason",
					"specialsortepisode"
				],
				"type": "string"
			}
		},
		"List.Filter.Albums": {
			"id": "List.Filter.Albums",
			"type": [
				{
					"properties": {
						"and": {
							"items": {
								"$ref": "List.Filter.Albums"
							},
							"minItems": 1,
							"required": true,
							"type": "array"
						}
					},
					"type": "object"
				},
				{
					"properties": {
						"or": {
							"items": {
								"$ref": "List.Filter.Albums"
							},
							"minItems": 1,
							"required": true,
							"type": "array"
						}
					},
					"type": "object"
				},
				{
					"$ref": "List.Filter.Rule.Albums"
				}
			]
		},
		"List.Filter.Artists": {
			"id": "List.Filter.Artists",
			"type": [
				{
					"properties": {
						"and": {
							"items": {
								"$ref": "List.Filter.Artists"
							},
							"minItems": 1,
							"required": true,
							"type": "array"
						}
					},
					"type": "object"
				},
				{
					"properties": {
						"or": {
							"items": {
								"$ref": "List.Filter.Artists"
							},
							"minItems": 1,
							"required": true,
							"type": "array"
						}
					},
					"type": "object"
				},
				{
					"$ref": "List.Filter.Rule.Artists"
				}
			]
		},
		"List.Filter.Episodes": {
			"id": "List.Filter.Episodes",
			"type": [
				{
					"properties": {
						"and": {
							"items": {
								"$ref": "List.Filter.Episodes"
							},
							"minItems": 1,
							"required": true,
							"type": "array"
						}
					},
					"type": "object"
				},
				{
					"properties": {
						"or": {
							"items": {
								"$ref": "List.Filter.Episodes"
							},
							"minItems": 1,
							"required": true,
							"type": "array"
						}
					},
					"type": "object"
				},
				{
					"$ref": "List.Filter.Rule.Episodes"
				}
			]
		},
		"List.Filter.Fields.Albums": {
			"default": "genre",
			"enums": [
				"genre",
				"album",
				"artist",
				"albumartist",
				"year",
				"review",
				"themes",
				"moods",
				"styles",
				"compilation",
				"type",
				"label",
				"rating",
				"userrating",
				"playcount",
				"lastplayed",
				"path",
				"playlist",
				"virtualfolder"
			],
			"id": "List.Filter.Fields.Albums",
			"type": "string"
		},
		"List.Filter.Fields.Artists": {
			"default": "artist",
			"enums": [
				"artist",
				"genre",
				"moods",
				"styles",
				"instruments",
				"biography",
				"born",
				"bandformed",
				"disbanded",
				"died",
				"role",
				"path",
				"playlist",
				"virtualfolder"
			],
			"id": "List.Filter.Fields.Artists",
			"type": "string"
		},
		"List.Filter.Fields.Episodes": {
			"default": "title",
			"enums": [
				"title",
				"tvshow",
				"plot",
				"votes",
				"rating",
				"userrating",
				"time",
				"writers",
				"airdate",
				"playcount",
				"lastplayed",
				"inprogress",
				"genre",
				"year",
				"director",
				"actor",
				"episode",
				"season",
				"filename",
				"path",
				"studio",
				"mpaarating",
				"dateadded",
				"tag",
				"videoresolution",
				"audiochannels",
				"audiocount",
				"subtitlecount",
				"videocodec",
				"audiocodec",
				"audiolanguage",
				"subtitlelanguage",
				"videoaspect",
				"playlist",
				"virtualfolder"
			],
			"id": "List.Filter.Fields.Episodes",
			"type": "string"
		},
		"List.Filter.Fields.Movies": {
			"default": "title",
			"enums": [
				"title",
				"plot",
				"plotoutline",
				"tagline",
				"votes",
				"rating",
				"userrating",
				"time",
				"writers",
				"playcount",
				"lastplayed",
				"inprogress",
				"genre",
				"country",
				"year",
				"director",
				"actor",
				"mpaarating",
				"top250",
				"studio",
				"hastrailer",
				"filename",
				"path",
				"set",
				"tag",
				"dateadded",
				"videoresolution",
				"audiochannels",
				"audiocount",
				"subtitlecount",
				"videocodec",
				"audiocodec",
				"audiolanguage",
				"subtitlelanguage",
				"videoaspect",
				"playlist",
				"virtualfolder"
			],
			"id": "List.Filter.Fields.Movies",
			"type": "string"
		},
		"List.Filter.Fields.MusicVideos": {
			"default": "title",
			"enums": [
				"title",
				"genre",
				"album",
				"year",
				"artist",
				"filename",
				"path",
				"playcount",
				"lastplayed",
				"rating",
				"userrating",
				"time",
				"director",
				"studio",
				"plot",
				"tag",
				"dateadded",
				"videoresolution",
				"audiochannels",
				"audiocount",
				"subtitlecount",
				"videocodec",
				"audiocodec",
				"audiolanguage",
				"subtitlelanguage",
				"videoaspect",
				"playlist",
				"virtualfolder"
			],
			"id": "List.Filter.Fields.MusicVideos",
			"type": "string"
		},
		"List.Filter.Fields.Songs": {
			"default": "genre",
			"enums": [
				"genre",
				"album",
				"artist",
				"albumartist",
				"title",
				"year",
				"time",
				"tracknumber",
				"filename",
				"path",
				"playcount",
				"lastplayed",
				"rating",
				"userrating",
				"comment",
				"moods",
				"playlist",
				"virtualfolder"
			],
			"id": "List.Filter.Fields.Songs",
			"type": "string"
		},
		"List.Filter.Fields.TVShows": {
			"default": "title",
			"enums": [
				"title",
				"plot",
				"status",
				"votes",
				"rating",
				"userrating",
				"year",
				"genre",
				"director",
				"actor",
				"numepisodes",
				"numwatched",
				"playcount",
				"path",
				"studio",
				"mpaarating",
				"dateadded",
				"lastplayed",
				"inprogress",
				"tag",
				"playlist",
				"virtualfolder"
			],
			"id": "List.Filter.Fields.TVShows",
			"type": "string"
		},
		"List.Filter.Fields.Textures": {
			"default": "textureid",
			"enums": [
				"textureid",
				"url",
				"cachedurl",
				"lasthashcheck",
				"imagehash",
				"width",
				"height",
				"usecount",
				"lastused"
			],
			"id": "List.Filter.Fields.Textures",
			"type": "string"
		},
		"List.Filter.Movies": {
			"id": "List.Filter.Movies",
			"type": [
				{
					"properties": {
						"and": {
							"items": {
								"$ref": "List.Filter.Movies"
							},
							"minItems": 1,
							"required": true,
							"type": "array"
						}
					},
					"type": "object"
				},
				{
					"properties": {
						"or": {
							"items": {
								"$ref": "List.Filter.Movies"
							},
							"minItems": 1,
							"required": true,
							"type": "array"
						}
					},
					"type": "object"
				},
				{
					"$ref": "List.Filter.Rule.Movies"
				}
			]
		},
		"List.Filter.MusicVideos": {
			"id": "List.Filter.MusicVideos",
			"type": [
				{
					"properties": {
						"and": {
							"items": {
								"$ref": "List.Filter.MusicVideos"
							},
							"minItems": 1,
							"required": true,
							"type": "array"
						}
					},
					"type": "object"
				},
				{
					"properties": {
						"or": {
							"items": {
								"$ref": "List.Filter.MusicVideos"
							},
							"minItems": 1,
							"required": true,
							"type": "array"
						}
					},
					"type": "object"
				},
				{
					"$ref": "List.Filter.Rule.MusicVideos"
				}
			]
		},
		"List.Filter.Operators": {
			"default": "contains",
			"enums": [
				"contains",
				"doesnotcontain",
				"is",
				"isnot",
				"startswith",
				"endswith",
				"greaterthan",
				"lessthan",
				"after",
				"before",
				"inthelast",
				"notinthelast",
				"true",
				"false",
				"between"
			],
			"id": "List.Filter.Operators",
			"type": "string"
		},
		"List.Filter.Rule": {
			"id": "List.Filter.Rule",
			"properties": {
				"operator": {
					"$ref": "List.Filter.Operators",
					"required": true
				},
				"value": {
					"required": true,
					"type": [
						{
							"type": "string"
						},
						{
							"items": {
								"type": "string"
							},
							"type": "array"
						}
					]
				}
			},
			"type": "object"
		},
		"List.Filter.Rule.Albums": {
			"extends": "List.Filter.Rule",
			"id": "List.Filter.Rule.Albums",
			"properties": {
				"field": {
					"$ref": "List.Filter.Fields.Albums",
					"required": true
				}
			}
		},
		"List.Filter.Rule.Artists": {
			"extends": "List.Filter.Rule",
			"id": "List.Filter.Rule.Artists",
			"properties": {
				"field": {
					"$ref": "List.Filter.Fields.Artists",
					"required": true
				}
			}
		},
		"List.Filter.Rule.Episodes": {
			"extends": "List.Filter.Rule",
			"id": "List.Filter.Rule.Episodes",
			"properties": {
				"field": {
					"$ref": "List.Filter.Fields.Episodes",
					"required": true
				}
			}
		},
		"List.Filter.Rule.Movies": {
			"extends": "List.Filter.Rule",
			"id": "List.Filter.Rule.Movies",
			"properties": {
				"field": {
					"$ref": "List.Filter.Fields.Movies",
					"required": true
				}
			}
		},
		"List.Filter.Rule.MusicVideos": {
			"extends": "List.Filter.Rule",
			"id": "List.Filter.Rule.MusicVideos",
			"properties": {
				"field": {
					"$ref": "List.Filter.Fields.MusicVideos",
					"required": true
				}
			}
		},
		"List.Filter.Rule.Songs": {
			"extends": "List.Filter.Rule",
			"id": "List.Filter.Rule.Songs",
			"properties": {
				"field": {
					"$ref": "List.Filter.Fields.Songs",
					"required": true
				}
			}
		},
		"List.Filter.Rule.TVShows": {
			"extends": "List.Filter.Rule",
			"id": "List.Filter.Rule.TVShows",
			"properties": {
				"field": {
					"$ref": "List.Filter.Fields.TVShows",
					"required": true
				}
			}
		},
		"List.Filter.Rule.Textures": {
			"extends": "List.Filter.Rule",
			"id": "List.Filter.Rule.Textures",
			"properties": {
				"field": {
					"$ref": "List.Filter.Fields.Textures",
					"required": true
				}
			}
		},
		"List.Filter.Songs": {
			"id": "List.Filter.Songs",
			"type": [
				{
					"properties": {
						"and": {
							"items": {
								"$ref": "List.Filter.Songs"
							},
							"minItems": 1,
							"required": true,
							"type": "array"
						}
					},
					"type": "object"
				},
				{
					"properties": {
						"or": {
							"items": {
								"$ref": "List.Filter.Songs"
							},
							"minItems": 1,
							"required": true,
							"type": "array"
						}
					},
					"type": "object"
				},
				{
					"$ref": "List.Filter.Rule.Songs"
				}
			]
		},
		"List.Filter.TVShows": {
			"id": "List.Filter.TVShows",
			"type": [
				{
					"properties": {
						"and": {
							"items": {
								"$ref": "List.Filter.TVShows"
							},
							"minItems": 1,
							"required": true,
							"type": "array"
						}
					},
					"type": "object"
				},
				{
					"properties": {
						"or": {
							"items": {
								"$ref": "List.Filter.TVShows"
							},
							"minItems": 1,
							"required": true,
							"type": "array"
						}
					},
					"type": "object"
				},
				{
					"$ref": "List.Filter.Rule.TVShows"
				}
			]
		},
		"List.Filter.Textures": {
			"id": "List.Filter.Textures",
			"type": [
				{
					"properties": {
						"and": {
							"items": {
								"$ref": "List.Filter.Textures"
							},
							"minItems": 1,
							"required": true,
							"type": "array"
						}
					},
					"type": "object"
				},
				{
					"properties": {
						"or": {
							"items": {
								"$ref": "List.Filter.Textures"
							},
							"minItems": 1,
							"required": true,
							"type": "array"
						}
					},
					"type": "object"
				},
				{
					"$ref": "List.Filter.Rule.Textures"
				}
			]
		},
		"List.Item.All": {
			"extends": "List.Item.Base",
			"id": "List.Item.All",
			"properties": {
				"channel": {
					"default": "",
					"type": "string"
				},
				"channelnumber": {
					"default": 0,
					"type": "integer"
				},
				"channeltype": {
					"$ref": "PVR.Channel.Type",
					"default": "tv"
				},
				"endtime": {
					"default": "",
					"type": "string"
				},
				"hidden": {
					"default": false,
					"type": "boolean"
				},
				"locked": {
					"default": false,
					"type": "boolean"
				},
				"starttime": {
					"default": "",
					"type": "string"
				}
			}
		},
		"List.Item.Base": {
			"extends": [
				"Video.Details.File",
				"Audio.Details.Media"
			],
			"id": "List.Item.Base",
			"properties": {
				"album": {
					"default": "",
					"type": "string"
				},
				"albumartist": {
					"$ref": "Array.String"
				},
				"albumartistid": {
					"$ref": "Array.Integer"
				},
				"albumid": {
					"$ref": "Library.Id",
					"default": -1
				},
				"albumlabel": {
					"default": "",
					"type": "string"
				},
				"albumreleasetype": {
					"$ref": "Audio.Album.ReleaseType",
					"default": "album"
				},
				"cast": {
					"$ref": "Video.Cast"
				},
				"comment": {
					"default": "",
					"type": "string"
				},
				"compilation": {
					"default": false,
					"type": "boolean"
				},
				"contributors": {
					"$ref": "Audio.Contributors"
				},
				"country": {
					"$ref": "Array.String"
				},
				"description": {
					"default": "",
					"type": "string"
				},
				"disc": {
					"default": 0,
					"type": "integer"
				},
				"displaycomposer": {
					"default": "",
					"type": "string"
				},
				"displayconductor": {
					"default": "",
					"type": "string"
				},
				"displaylyricist": {
					"default": "",
					"type": "string"
				},
				"displayorchestra": {
					"default": "",
					"type": "string"
				},
				"duration": {
					"default": 0,
					"type": "integer"
				},
				"episode": {
					"default": 0,
					"type": "integer"
				},
				"episodeguide": {
					"default": "",
					"type": "string"
				},
				"firstaired": {
					"default": "",
					"type": "string"
				},
				"id": {
					"$ref": "Library.Id",
					"default": -1
				},
				"imdbnumber": {
					"default": "",
					"type": "string"
				},
				"lyrics": {
					"default": "",
					"type": "string"
				},
				"mood": {
					"$ref": "Array.String"
				},
				"mpaa": {
					"default": "",
					"type": "string"
				},
				"musicbrainzartistid": {
					"default": "",
					"type": "string"
				},
				"musicbrainztrackid": {
					"default": "",
					"type": "string"
				},
				"originaltitle": {
					"default": "",
					"type": "string"
				},
				"plotoutline": {
					"default": "",
					"type": "string"
				},
				"premiered": {
					"default": "",
					"type": "string"
				},
				"productioncode": {
					"default": "",
					"type": "string"
				},
				"releasetype": {
					"$ref": "Audio.Album.ReleaseType",
					"default": "album"
				},
				"season": {
					"default": 0,
					"type": "integer"
				},
				"set": {
					"default": "",
					"type": "string"
				},
				"setid": {
					"$ref": "Library.Id",
					"default": -1
				},
				"showlink": {
					"$ref": "Array.String"
				},
				"showtitle": {
					"default": "",
					"type": "string"
				},
				"sorttitle": {
					"default": "",
					"type": "string"
				},
				"specialsortepisode": {
					"default": 0,
					"type": "integer"
				},
				"specialsortseason": {
					"default": 0,
					"type": "integer"
				},
				"studio": {
					"$ref": "Array.String"
				},
				"style": {
					"$ref": "Array.String"
				},
				"tag": {
					"$ref": "Array.String"
				},
				"tagline": {
					"default": "",
					"type": "string"
				},
				"theme": {
					"$ref": "Array.String"
				},
				"top250": {
					"default": 0,
					"type": "integer"
				},
				"track": {
					"default": 0,
					"type": "integer"
				},
				"trailer": {
					"default": "",
					"type": "string"
				},
				"tvshowid": {
					"$ref": "Library.Id",
					"default": -1
				},
				"type": {
					"default": "unknown",
					"enums": [
						"unknown",
						"movie",
						"episode",
						"musicvideo",
						"song",
						"picture",
						"channel"
					],
					"type": "string"
				},
				"uniqueid": {
					"$ref": "Media.UniqueID"
				},
				"votes": {
					"default": "",
					"type": "string"
				},
				"watchedepisodes": {
					"default": 0,
					"type": "integer"
				},
				"writer": {
					"$ref": "Array.String"
				}
			}
		},
		"List.Item.File": {
			"extends": "List.Item.Base",
			"id": "List.Item.File",
			"properties": {
				"file": {
					"required": true,
					"type": "string"
				},
				"filetype": {
					"enums": [
						"file",
						"directory"
					],
					"required": true,
					"type": "string"
				},
				"lastmodified": {
					"default": "",
					"type": "string"
				},
				"mimetype": {
					"default": "",
					"type": "string"
				},
				"size": {
					"default": 0,
					"description": "Size of the file in bytes",
					"type": "integer"
				}
			}
		},
		"List.Items.Sources": {
			"id": "List.Items.Sources",
			"items": {
				"extends": "Item.Details.Base",
				"properties": {
					"file": {
						"required": true,
						"type": "string"
					}
				}
			},
			"type": "array"
		},
		"List.Limits": {
			"additionalProperties": false,
			"id": "List.Limits",
			"properties": {
				"end": {
					"$ref": "List.Amount",
					"default": -1,
					"description": "Index of the last item to return"
				},
				"start": {
					"default": 0,
					"description": "Index of the first item to return",
					"minimum": 0,
					"type": "integer"
				}
			},
			"type": "object"
		},
		"List.LimitsReturned": {
			"additionalProperties": false,
			"id": "List.LimitsReturned",
			"properties": {
				"end": {
					"$ref": "List.Amount",
					"default": -1
				},
				"start": {
					"default": 0,
					"minimum": 0,
					"type": "integer"
				},
				"total": {
					"minimum": 0,
					"required": true,
					"type": "integer"
				}
			},
			"type": "object"
		},
		"List.Sort": {
			"id": "List.Sort",
			"properties": {
				"ignorearticle": {
					"default": false,
					"type": "boolean"
				},
				"method": {
					"default": "none",
					"enums": [
						"none",
						"label",
						"date",
						"size",
						"file",
						"path",
						"drivetype",
						"title",
						"track",
						"time",
						"artist",
						"album",
						"albumtype",
						"genre",
						"country",
						"year",
						"rating",
						"userrating",
						"votes",
						"top250",
						"programcount",
						"playlist",
						"episode",
						"season",
						"totalepisodes",
						"watchedepisodes",
						"tvshowstatus",
						"tvshowtitle",
						"sorttitle",
						"productioncode",
						"mpaa",
						"studio",
						"dateadded",
						"lastplayed",
						"playcount",
						"listeners",
						"bitrate",
						"random"
					],
					"type": "string"
				},
				"order": {
					"default": "ascending",
					"enums": [
						"ascending",
						"descending"
					],
					"type": "string"
				}
			},
			"type": "object"
		},
		"Media.Artwork": {
			"additionalProperties": {
				"$ref": "Global.String.NotEmpty",
				"default": ""
			},
			"id": "Media.Artwork",
			"properties": {
				"banner": {
					"$ref": "Global.String.NotEmpty",
					"default": ""
				},
				"fanart": {
					"$ref": "Global.String.NotEmpty",
					"default": ""
				},
				"poster": {
					"$ref": "Global.String.NotEmpty",
					"default": ""
				},
				"thumb": {
					"$ref": "Global.String.NotEmpty",
					"default": ""
				}
			},
			"type": "object"
		},
		"Media.Artwork.Set": {
			"additionalProperties": {
				"default": null,
				"type": [
					{
						"type": "null"
					},
					{
						"$ref": "Global.String.NotEmpty"
					}
				]
			},
			"id": "Media.Artwork.Set",
			"properties": {
				"banner": {
					"default": "",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Global.String.NotEmpty"
						}
					]
				},
				"fanart": {
					"default": "",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Global.String.NotEmpty"
						}
					]
				},
				"poster": {
					"default": "",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Global.String.NotEmpty"
						}
					]
				},
				"thumb": {
					"default": "",
					"type": [
						{
							"type": "null"
						},
						{
							"$ref": "Global.String.NotEmpty"
						}
					]
				}
			},
			"type": "object"
		},
		"Media.Details.Base": {
			"extends": "Item.Details.Base",
			"id": "Media.Details.Base",
			"properties": {
				"fanart": {
					"default": "",
					"type": "string"
				},
				"thumbnail": {
					"default": "",
					"type": "string"
				}
			}
		},
		"Media.UniqueID": {
			"additionalProperties": {
				"$ref": "Global.String.NotEmpty",
				"default": ""
			},
			"id": "Media.UniqueID",
			"type": "object"
		},
		"Media.UniqueID.Set": {
			"additionalProperties": {
				"default": null,
				"type": [
					{
						"type": "null"
					},
					{
						"$ref": "Global.String.NotEmpty"
					}
				]
			},
			"id": "Media.UniqueID.Set",
			"type": "object"
		},
		"Notifications.Item": {
			"id": "Notifications.Item",
			"type": [
				{
					"description": "An unknown item does not have any additional information.",
					"properties": {
						"type": {
							"$ref": "Notifications.Item.Type",
							"required": true
						}
					},
					"type": "object"
				},
				{
					"description": "An item known to the database has an identification.",
					"properties": {
						"id": {
							"$ref": "Library.Id",
							"required": true
						},
						"type": {
							"$ref": "Notifications.Item.Type",
							"required": true
						}
					},
					"type": "object"
				},
				{
					"description": "A movie item has a title and may have a release year.",
					"properties": {
						"title": {
							"required": true,
							"type": "string"
						},
						"type": {
							"$ref": "Notifications.Item.Type",
							"required": true
						},
						"year": {
							"default": 0,
							"type": "integer"
						}
					},
					"type": "object"
				},
				{
					"description": "A tv episode has a title and may have an episode number, season number and the title of the show it belongs to.",
					"properties": {
						"episode": {
							"default": 0,
							"type": "integer"
						},
						"season": {
							"default": 0,
							"type": "integer"
						},
						"showtitle": {
							"default": "",
							"type": "string"
						},
						"title": {
							"required": true,
							"type": "string"
						},
						"type": {
							"$ref": "Notifications.Item.Type",
							"required": true
						}
					},
					"type": "object"
				},
				{
					"description": "A music video has a title and may have an album and an artist.",
					"properties": {
						"album": {
							"default": "",
							"type": "string"
						},
						"artist": {
							"default": "",
							"type": "string"
						},
						"title": {
							"required": true,
							"type": "string"
						},
						"type": {
							"$ref": "Notifications.Item.Type",
							"required": true
						}
					},
					"type": "object"
				},
				{
					"description": "A song has a title and may have an album, an artist and a track number.",
					"properties": {
						"album": {
							"default": "",
							"type": "string"
						},
						"artist": {
							"default": "",
							"type": "string"
						},
						"title": {
							"required": true,
							"type": "string"
						},
						"track": {
							"default": 0,
							"type": "integer"
						},
						"type": {
							"$ref": "Notifications.Item.Type",
							"required": true
						}
					},
					"type": "object"
				},
				{
					"description": "A picture has a file path.",
					"properties": {
						"file": {
							"required": true,
							"type": "string"
						},
						"type": {
							"$ref": "Notifications.Item.Type",
							"required": true
						}
					},
					"type": "object"
				},
				{
					"description": "A PVR channel is either a radio or tv channel and has a title.",
					"properties": {
						"channeltype": {
							"$ref": "PVR.Channel.Type",
							"required": true
						},
						"id": {
							"$ref": "Library.Id",
							"required": true
						},
						"title": {
							"required": true,
							"type": "string"
						},
						"type": {
							"$ref": "Notifications.Item.Type",
							"required": true
						}
					},
					"type": "object"
				}
			]
		},
		"Notifications.Item.Type": {
			"default": "unknown",
			"enums": [
				"unknown",
				"movie",
				"episode",
				"musicvideo",
				"song",
				"picture",
				"channel"
			],
			"id": "Notifications.Item.Type",
			"type": "string"
		},
		"Optional.Boolean": {
			"default": null,
			"id": "Optional.Boolean",
			"type": [
				{
					"type": "null"
				},
				{
					"type": "boolean"
				}
			]
		},
		"Optional.Integer": {
			"default": null,
			"id": "Optional.Integer",
			"type": [
				{
					"type": "null"
				},
				{
					"type": "integer"
				}
			]
		},
		"Optional.Number": {
			"default": null,
			"id": "Optional.Number",
			"type": [
				{
					"type": "null"
				},
				{
					"type": "number"
				}
			]
		},
		"Optional.String": {
			"default": null,
			"id": "Optional.String",
			"type": [
				{
					"type": "null"
				},
				{
					"type": "string"
				}
			]
		},
		"PVR.Channel.Type": {
			"default": "tv",
			"enums": [
				"tv",
				"radio"
			],
			"id": "PVR.Channel.Type",
			"type": "string"
		},
		"PVR.ChannelGroup.Id": {
			"default": null,
			"id": "PVR.ChannelGroup.Id",
			"type": [
				{
					"$ref": "Library.Id"
				},
				{
					"enums": [
						"alltv",
						"allradio"
					],
					"type": "string"
				}
			]
		},
		"PVR.Details.Broadcast": {
			"extends": "Item.Details.Base",
			"id": "PVR.Details.Broadcast",
			"properties": {
				"broadcastid": {
					"$ref": "Library.Id",
					"required": true
				},
				"cast": {
					"default": "",
					"type": "string"
				},
				"director": {
					"default": "",
					"type": "string"
				},
				"endtime": {
					"default": "",
					"type": "string"
				},
				"episodename": {
					"default": "",
					"type": "string"
				},
				"episodenum": {
					"default": 0,
					"type": "integer"
				},
				"episodepart": {
					"default": 0,
					"type": "integer"
				},
				"firstaired": {
					"default": "",
					"type": "string"
				},
				"genre": {
					"default": "",
					"type": "string"
				},
				"hasrecording": {
					"default": false,
					"type": "boolean"
				},
				"hastimer": {
					"default": false,
					"type": "boolean"
				},
				"hastimerrule": {
					"default": false,
					"type": "boolean"
				},
				"imdbnumber": {
					"default": 0,
					"type": "integer"
				},
				"isactive": {
					"default": false,
					"type": "boolean"
				},
				"isseries": {
					"default": false,
					"type": "boolean"
				},
				"originaltitle": {
					"default": "",
					"type": "string"
				},
				"parentalrating": {
					"default": 0,
					"type": "integer"
				},
				"plot": {
					"default": "",
					"type": "string"
				},
				"plotoutline": {
					"default": "",
					"type": "string"
				},
				"progress": {
					"default": 0,
					"type": "integer"
				},
				"progresspercentage": {
					"default": 0,
					"type": "number"
				},
				"rating": {
					"default": 0,
					"type": "integer"
				},
				"recording": {
					"default": "",
					"type": "string"
				},
				"runtime": {
					"default": 0,
					"type": "integer"
				},
				"starttime": {
					"default": "",
					"type": "string"
				},
				"thumbnail": {
					"default": "",
					"type": "string"
				},
				"title": {
					"default": "",
					"type": "string"
				},
				"wasactive": {
					"default": false,
					"type": "boolean"
				},
				"writer": {
					"default": "",
					"type": "string"
				},
				"year": {
					"default": 0,
					"type": "integer"
				}
			}
		},
		"PVR.Details.Channel": {
			"extends": "Item.Details.Base",
			"id": "PVR.Details.Channel",
			"properties": {
				"broadcastnext": {
					"$ref": "PVR.Details.Broadcast"
				},
				"broadcastnow": {
					"$ref": "PVR.Details.Broadcast"
				},
				"channel": {
					"default": "",
					"type": "string"
				},
				"channelid": {
					"$ref": "Library.Id",
					"required": true
				},
				"channelnumber": {
					"default": 0,
					"type": "integer"
				},
				"channeltype": {
					"$ref": "PVR.Channel.Type",
					"default": "tv"
				},
				"hidden": {
					"default": false,
					"type": "boolean"
				},
				"icon": {
					"default": "",
					"type": "string"
				},
				"isrecording": {
					"default": false,
					"type": "boolean"
				},
				"lastplayed": {
					"default": "",
					"type": "string"
				},
				"locked": {
					"default": false,
					"type": "boolean"
				},
				"subchannelnumber": {
					"default": 0,
					"type": "integer"
				},
				"thumbnail": {
					"default": "",
					"type": "string"
				},
				"uniqueid": {
					"required": true,
					"type": "integer"
				}
			}
		},
		"PVR.Details.ChannelGroup": {
			"extends": "Item.Details.Base",
			"id": "PVR.Details.ChannelGroup",
			"properties": {
				"channelgroupid": {
					"$ref": "Library.Id",
					"required": true
				},
				"channeltype": {
					"$ref": "PVR.Channel.Type",
					"required": true
				}
			}
		},
		"PVR.Details.ChannelGroup.Extended": {
			"extends": "PVR.Details.ChannelGroup",
			"id": "PVR.Details.ChannelGroup.Extended",
			"properties": {
				"channels": {
					"items": {
						"$ref": "PVR.Details.Channel"
					},
					"type": "array"
				},
				"limits": {
					"$ref": "List.LimitsReturned",
					"required": true
				}
			}
		},
		"PVR.Details.Recording": {
			"extends": "Item.Details.Base",
			"id": "PVR.Details.Recording",
			"properties": {
				"art": {
					"$ref": "Media.Artwork"
				},
				"channel": {
					"default": "",
					"type": "string"
				},
				"channeluid": {
					"default": 0,
					"type": "integer"
				},
				"directory": {
					"default": "",
					"type": "string"
				},
				"endtime": {
					"default": "",
					"type": "string"
				},
				"epgeventid": {
					"default": 0,
					"type": "integer"
				},
				"file": {
					"default": "",
					"type": "string"
				},
				"genre": {
					"default": "",
					"type": "string"
				},
				"icon": {
					"default": "",
					"type": "string"
				},
				"isdeleted": {
					"default": false,
					"type": "boolean"
				},
				"lifetime": {
					"default": 0,
					"type": "integer"
				},
				"playcount": {
					"default": 0,
					"type": "integer"
				},
				"plot": {
					"default": "",
					"type": "string"
				},
				"plotoutline": {
					"default": "",
					"type": "string"
				},
				"radio": {
					"default": false,
					"type": "boolean"
				},
				"recordingid": {
					"$ref": "Library.Id",
					"required": true
				},
				"resume": {
					"$ref": "Video.Resume"
				},
				"runtime": {
					"default": 0,
					"type": "integer"
				},
				"starttime": {
					"default": "",
					"type": "string"
				},
				"streamurl": {
					"default": "",
					"type": "string"
				},
				"title": {
					"default": "",
					"type": "string"
				}
			}
		},
		"PVR.Details.Timer": {
			"extends": "Item.Details.Base",
			"id": "PVR.Details.Timer",
			"properties": {
				"channelid": {
					"$ref": "Library.Id",
					"default": -1
				},
				"directory": {
					"default": "",
					"type": "string"
				},
				"endanytime": {
					"default": false,
					"type": "boolean"
				},
				"endmargin": {
					"default": 0,
					"type": "integer"
				},
				"endtime": {
					"default": "",
					"type": "string"
				},
				"epgsearchstring": {
					"default": "",
					"type": "string"
				},
				"epguid": {
					"default": 0,
					"type": "integer"
				},
				"file": {
					"default": "",
					"type": "string"
				},
				"firstday": {
					"default": "",
					"type": "string"
				},
				"fulltextepgsearch": {
					"default": false,
					"type": "boolean"
				},
				"ismanual": {
					"default": false,
					"type": "boolean"
				},
				"isradio": {
					"default": false,
					"type": "boolean"
				},
				"isreadonly": {
					"default": false,
					"type": "boolean"
				},
				"istimerrule": {
					"default": false,
					"type": "boolean"
				},
				"lifetime": {
					"default": 0,
					"type": "integer"
				},
				"maxrecordings": {
					"default": 0,
					"type": "integer"
				},
				"preventduplicateepisodes": {
					"default": 0,
					"type": "integer"
				},
				"priority": {
					"default": 0,
					"type": "integer"
				},
				"recordinggroup": {
					"default": 0,
					"type": "integer"
				},
				"runtime": {
					"default": 0,
					"type": "integer"
				},
				"startanytime": {
					"default": false,
					"type": "boolean"
				},
				"startmargin": {
					"default": 0,
					"type": "integer"
				},
				"starttime": {
					"default": "",
					"type": "string"
				},
				"state": {
					"$ref": "PVR.TimerState",
					"default": "unknown"
				},
				"summary": {
					"default": "",
					"type": "string"
				},
				"timerid": {
					"$ref": "Library.Id",
					"required": true
				},
				"title": {
					"default": "",
					"type": "string"
				},
				"weekdays": {
					"items": {
						"$ref": "Global.Weekday"
					},
					"type": "array",
					"uniqueItems": true
				}
			}
		},
		"PVR.Fields.Broadcast": {
			"extends": "Item.Fields.Base",
			"id": "PVR.Fields.Broadcast",
			"items": {
				"enums": [
					"title",
					"plot",
					"plotoutline",
					"starttime",
					"endtime",
					"runtime",
					"progress",
					"progresspercentage",
					"genre",
					"episodename",
					"episodenum",
					"episodepart",
					"firstaired",
					"hastimer",
					"isactive",
					"parentalrating",
					"wasactive",
					"thumbnail",
					"rating",
					"originaltitle",
					"cast",
					"director",
					"writer",
					"year",
					"imdbnumber",
					"hastimerrule",
					"hasrecording",
					"recording",
					"isseries"
				],
				"type": "string"
			}
		},
		"PVR.Fields.Channel": {
			"extends": "Item.Fields.Base",
			"id": "PVR.Fields.Channel",
			"items": {
				"enums": [
					"thumbnail",
					"channeltype",
					"hidden",
					"locked",
					"channel",
					"lastplayed",
					"broadcastnow",
					"broadcastnext",
					"uniqueid",
					"icon",
					"channelnumber",
					"subchannelnumber",
					"isrecording"
				],
				"type": "string"
			}
		},
		"PVR.Fields.Recording": {
			"extends": "Item.Fields.Base",
			"id": "PVR.Fields.Recording",
			"items": {
				"enums": [
					"title",
					"plot",
					"plotoutline",
					"genre",
					"playcount",
					"resume",
					"channel",
					"starttime",
					"endtime",
					"runtime",
					"lifetime",
					"icon",
					"art",
					"streamurl",
					"file",
					"directory",
					"radio",
					"isdeleted",
					"epgeventid",
					"channeluid"
				],
				"type": "string"
			}
		},
		"PVR.Fields.Timer": {
			"extends": "Item.Fields.Base",
			"id": "PVR.Fields.Timer",
			"items": {
				"enums": [
					"title",
					"summary",
					"channelid",
					"isradio",
					"istimerrule",
					"ismanual",
					"starttime",
					"endtime",
					"runtime",
					"lifetime",
					"firstday",
					"weekdays",
					"priority",
					"startmargin",
					"endmargin",
					"state",
					"file",
					"directory",
					"preventduplicateepisodes",
					"startanytime",
					"endanytime",
					"epgsearchstring",
					"fulltextepgsearch",
					"recordinggroup",
					"maxrecordings",
					"epguid",
					"isreadonly"
				],
				"type": "string"
			}
		},
		"PVR.Property.Name": {
			"default": "available",
			"enums": [
				"available",
				"recording",
				"scanning"
			],
			"id": "PVR.Property.Name",
			"type": "string"
		},
		"PVR.Property.Value": {
			"id": "PVR.Property.Value",
			"properties": {
				"available": {
					"default": false,
					"type": "boolean"
				},
				"recording": {
					"default": false,
					"type": "boolean"
				},
				"scanning": {
					"default": false,
					"type": "boolean"
				}
			},
			"type": "object"
		},
		"PVR.TimerState": {
			"default": "unknown",
			"enums": [
				"unknown",
				"new",
				"scheduled",
				"recording",
				"completed",
				"aborted",
				"cancelled",
				"conflict_ok",
				"conflict_notok",
				"error",
				"disabled"
			],
			"id": "PVR.TimerState",
			"type": "string"
		},
		"Player.Audio.Stream": {
			"id": "Player.Audio.Stream",
			"properties": {
				"bitrate": {
					"required": true,
					"type": "integer"
				},
				"channels": {
					"required": true,
					"type": "integer"
				},
				"codec": {
					"required": true,
					"type": "string"
				},
				"index": {
					"minimum": 0,
					"required": true,
					"type": "integer"
				},
				"language": {
					"required": true,
					"type": "string"
				},
				"name": {
					"required": true,
					"type": "string"
				}
			},
			"type": "object"
		},
		"Player.Id": {
			"default": -1,
			"id": "Player.Id",
			"maximum": 2,
			"minimum": 0,
			"type": "integer"
		},
		"Player.Notifications.Data": {
			"id": "Player.Notifications.Data",
			"properties": {
				"item": {
					"$ref": "Notifications.Item",
					"required": true
				},
				"player": {
					"$ref": "Player.Notifications.Player",
					"required": true
				}
			},
			"type": "object"
		},
		"Player.Notifications.Player": {
			"id": "Player.Notifications.Player",
			"properties": {
				"playerid": {
					"$ref": "Player.Id",
					"required": true
				},
				"speed": {
					"default": 0,
					"type": "integer"
				}
			},
			"type": "object"
		},
		"Player.Notifications.Player.Seek": {
			"extends": "Player.Notifications.Player",
			"id": "Player.Notifications.Player.Seek",
			"properties": {
				"seekoffset": {
					"$ref": "Global.Time"
				},
				"time": {
					"$ref": "Global.Time"
				}
			}
		},
		"Player.Position.Percentage": {
			"default": 0,
			"id": "Player.Position.Percentage",
			"maximum": 100,
			"minimum": 0,
			"type": "number"
		},
		"Player.Position.Time": {
			"additionalProperties": false,
			"id": "Player.Position.Time",
			"properties": {
				"hours": {
					"default": 0,
					"maximum": 23,
					"minimum": 0,
					"type": "integer"
				},
				"milliseconds": {
					"default": 0,
					"maximum": 999,
					"minimum": 0,
					"type": "integer"
				},
				"minutes": {
					"default": 0,
					"maximum": 59,
					"minimum": 0,
					"type": "integer"
				},
				"seconds": {
					"default": 0,
					"maximum": 59,
					"minimum": 0,
					"type": "integer"
				}
			},
			"type": "object"
		},
		"Player.Property.Name": {
			"default": "type",
			"enums": [
				"type",
				"partymode",
				"speed",
				"time",
				"percentage",
				"totaltime",
				"playlistid",
				"position",
				"repeat",
				"shuffled",
				"canseek",
				"canchangespeed",
				"canmove",
				"canzoom",
				"canrotate",
				"canshuffle",
				"canrepeat",
				"currentaudiostream",
				"audiostreams",
				"subtitleenabled",
				"currentsubtitle",
				"subtitles",
				"live",
				"currentvideostream",
				"videostreams"
			],
			"id": "Player.Property.Name",
			"type": "string"
		},
		"Player.Property.Value": {
			"id": "Player.Property.Value",
			"properties": {
				"audiostreams": {
					"items": {
						"$ref": "Player.Audio.Stream"
					},
					"type": "array"
				},
				"canchangespeed": {
					"default": false,
					"type": "boolean"
				},
				"canmove": {
					"default": false,
					"type": "boolean"
				},
				"canrepeat": {
					"default": false,
					"type": "boolean"
				},
				"canrotate": {
					"default": false,
					"type": "boolean"
				},
				"canseek": {
					"default": false,
					"type": "boolean"
				},
				"canshuffle": {
					"default": false,
					"type": "boolean"
				},
				"canzoom": {
					"default": false,
					"type": "boolean"
				},
				"currentaudiostream": {
					"$ref": "Player.Audio.Stream"
				},
				"currentsubtitle": {
					"$ref": "Player.Subtitle"
				},
				"currentvideostream": {
					"$ref": "Player.Video.Stream"
				},
				"live": {
					"default": false,
					"type": "boolean"
				},
				"partymode": {
					"default": false,
					"type": "boolean"
				},
				"percentage": {
					"$ref": "Player.Position.Percentage",
					"default": 0
				},
				"playlistid": {
					"$ref": "Playlist.Id",
					"default": -1
				},
				"position": {
					"$ref": "Playlist.Position",
					"default": -1
				},
				"repeat": {
					"$ref": "Player.Repeat",
					"default": "off"
				},
				"shuffled": {
					"default": false,
					"type": "boolean"
				},
				"speed": {
					"default": 0,
					"type": "integer"
				},
				"subtitleenabled": {
					"default": false,
					"type": "boolean"
				},
				"subtitles": {
					"items": {
						"$ref": "Player.Subtitle"
					},
					"type": "array"
				},
				"time": {
					"$ref": "Global.Time"
				},
				"totaltime": {
					"$ref": "Global.Time"
				},
				"type": {
					"$ref": "Player.Type",
					"default": "video"
				},
				"videostreams": {
					"items": {
						"$ref": "Player.Video.Stream"
					},
					"type": "array"
				}
			},
			"type": "object"
		},
		"Player.Repeat": {
			"default": "off",
			"enums": [
				"off",
				"one",
				"all"
			],
			"id": "Player.Repeat",
			"type": "string"
		},
		"Player.Speed": {
			"id": "Player.Speed",
			"properties": {
				"speed": {
					"default": 0,
					"type": "integer"
				}
			},
			"required": true,
			"type": "object"
		},
		"Player.Subtitle": {
			"id": "Player.Subtitle",
			"properties": {
				"index": {
					"minimum": 0,
					"required": true,
					"type": "integer"
				},
				"language": {
					"required": true,
					"type": "string"
				},
				"name": {
					"required": true,
					"type": "string"
				}
			},
			"type": "object"
		},
		"Player.Type": {
			"default": "video",
			"enums": [
				"video",
				"audio",
				"picture"
			],
			"id": "Player.Type",
			"type": "string"
		},
		"Player.Video.Stream": {
			"id": "Player.Video.Stream",
			"properties": {
				"codec": {
					"required": true,
					"type": "string"
				},
				"height": {
					"required": true,
					"type": "integer"
				},
				"index": {
					"minimum": 0,
					"required": true,
					"type": "integer"
				},
				"language": {
					"required": true,
					"type": "string"
				},
				"name": {
					"required": true,
					"type": "string"
				},
				"width": {
					"required": true,
					"type": "integer"
				}
			},
			"type": "object"
		},
		"Playlist.Id": {
			"default": -1,
			"id": "Playlist.Id",
			"maximum": 2,
			"minimum": 0,
			"type": "integer"
		},
		"Playlist.Item": {
			"id": "Playlist.Item",
			"type": [
				{
					"additionalProperties": false,
					"properties": {
						"file": {
							"description": "Path to a file (not a directory) to be added to the playlist",
							"required": true,
							"type": "string"
						}
					},
					"type": "object"
				},
				{
					"additionalProperties": false,
					"properties": {
						"directory": {
							"required": true,
							"type": "string"
						},
						"media": {
							"$ref": "Files.Media",
							"default": "files"
						},
						"recursive": {
							"default": false,
							"type": "boolean"
						}
					},
					"type": "object"
				},
				{
					"additionalProperties": false,
					"properties": {
						"movieid": {
							"$ref": "Library.Id",
							"required": true
						}
					},
					"type": "object"
				},
				{
					"additionalProperties": false,
					"properties": {
						"episodeid": {
							"$ref": "Library.Id",
							"required": true
						}
					},
					"type": "object"
				},
				{
					"additionalProperties": false,
					"properties": {
						"musicvideoid": {
							"$ref": "Library.Id",
							"required": true
						}
					},
					"type": "object"
				},
				{
					"additionalProperties": false,
					"properties": {
						"artistid": {
							"$ref": "Library.Id",
							"required": true
						}
					},
					"type": "object"
				},
				{
					"additionalProperties": false,
					"properties": {
						"albumid": {
							"$ref": "Library.Id",
							"required": true
						}
					},
					"type": "object"
				},
				{
					"additionalProperties": false,
					"properties": {
						"songid": {
							"$ref": "Library.Id",
							"required": true
						}
					},
					"type": "object"
				},
				{
					"additionalProperties": false,
					"properties": {
						"genreid": {
							"$ref": "Library.Id",
							"description": "Identification of a genre from the AudioLibrary",
							"required": true
						}
					},
					"type": "object"
				}
			]
		},
		"Playlist.Position": {
			"default": -1,
			"id": "Playlist.Position",
			"minimum": 0,
			"type": "integer"
		},
		"Playlist.Property.Name": {
			"default": "type",
			"enums": [
				"type",
				"size"
			],
			"id": "Playlist.Property.Name",
			"type": "string"
		},
		"Playlist.Property.Value": {
			"id": "Playlist.Property.Value",
			"properties": {
				"size": {
					"default": 0,
					"minimum": 0,
					"type": "integer"
				},
				"type": {
					"$ref": "Playlist.Type",
					"default": "unknown"
				}
			},
			"type": "object"
		},
		"Playlist.Type": {
			"default": "unknown",
			"enums": [
				"unknown",
				"video",
				"audio",
				"picture",
				"mixed"
			],
			"id": "Playlist.Type",
			"type": "string"
		},
		"Profiles.Details.Profile": {
			"extends": "Item.Details.Base",
			"id": "Profiles.Details.Profile",
			"properties": {
				"lockmode": {
					"default": 0,
					"type": "integer"
				},
				"thumbnail": {
					"default": "",
					"type": "string"
				}
			}
		},
		"Profiles.Fields.Profile": {
			"extends": "Item.Fields.Base",
			"id": "Profiles.Fields.Profile",
			"items": {
				"enums": [
					"thumbnail",
					"lockmode"
				],
				"type": "string"
			}
		},
		"Profiles.Password": {
			"id": "Profiles.Password",
			"properties": {
				"encryption": {
					"default": "md5",
					"description": "Password Encryption",
					"enums": [
						"none",
						"md5"
					],
					"type": "string"
				},
				"value": {
					"description": "Password",
					"required": true,
					"type": "string"
				}
			},
			"type": "object"
		},
		"Setting.Details.Base": {
			"id": "Setting.Details.Base",
			"properties": {
				"help": {
					"default": "",
					"type": "string"
				},
				"id": {
					"minLength": 1,
					"required": true,
					"type": "string"
				},
				"label": {
					"required": true,
					"type": "string"
				}
			},
			"type": "object"
		},
		"Setting.Details.Category": {
			"additionalProperties": false,
			"extends": "Setting.Details.Base",
			"id": "Setting.Details.Category",
			"properties": {
				"groups": {
					"items": {
						"$ref": "Setting.Details.Group"
					},
					"minItems": 1,
					"type": "array",
					"uniqueItems": true
				}
			}
		},
		"Setting.Details.Control": {
			"id": "Setting.Details.Control",
			"type": [
				{
					"$ref": "Setting.Details.ControlCheckmark"
				},
				{
					"$ref": "Setting.Details.ControlSpinner"
				},
				{
					"$ref": "Setting.Details.ControlEdit"
				},
				{
					"$ref": "Setting.Details.ControlButton"
				},
				{
					"$ref": "Setting.Details.ControlList"
				},
				{
					"$ref": "Setting.Details.ControlSlider"
				},
				{
					"$ref": "Setting.Details.ControlRange"
				}
			]
		},
		"Setting.Details.ControlBase": {
			"id": "Setting.Details.ControlBase",
			"properties": {
				"delayed": {
					"required": true,
					"type": "boolean"
				},
				"format": {
					"required": true,
					"type": "string"
				},
				"type": {
					"required": true,
					"type": "string"
				}
			},
			"type": "object"
		},
		"Setting.Details.ControlButton": {
			"extends": "Setting.Details.ControlHeading",
			"id": "Setting.Details.ControlButton",
			"properties": {
				"type": {
					"enums": [
						"button"
					],
					"required": true,
					"type": "string"
				}
			}
		},
		"Setting.Details.ControlCheckmark": {
			"extends": "Setting.Details.ControlBase",
			"id": "Setting.Details.ControlCheckmark",
			"properties": {
				"format": {
					"enums": [
						"boolean"
					],
					"required": true,
					"type": "string"
				},
				"type": {
					"enums": [
						"toggle"
					],
					"required": true,
					"type": "string"
				}
			}
		},
		"Setting.Details.ControlEdit": {
			"extends": "Setting.Details.ControlHeading",
			"id": "Setting.Details.ControlEdit",
			"properties": {
				"hidden": {
					"required": true,
					"type": "boolean"
				},
				"type": {
					"enums": [
						"edit"
					],
					"required": true,
					"type": "string"
				},
				"verifynewvalue": {
					"required": true,
					"type": "boolean"
				}
			}
		},
		"Setting.Details.ControlHeading": {
			"extends": "Setting.Details.ControlBase",
			"id": "Setting.Details.ControlHeading",
			"properties": {
				"heading": {
					"default": "",
					"type": "string"
				}
			}
		},
		"Setting.Details.ControlList": {
			"extends": "Setting.Details.ControlHeading",
			"id": "Setting.Details.ControlList",
			"properties": {
				"multiselect": {
					"required": true,
					"type": "boolean"
				},
				"type": {
					"enums": [
						"list"
					],
					"required": true,
					"type": "string"
				}
			}
		},
		"Setting.Details.ControlRange": {
			"extends": "Setting.Details.ControlBase",
			"id": "Setting.Details.ControlRange",
			"properties": {
				"formatlabel": {
					"required": true,
					"type": "string"
				},
				"formatvalue": {
					"required": true,
					"type": "string"
				},
				"type": {
					"enums": [
						"range"
					],
					"required": true,
					"type": "string"
				}
			}
		},
		"Setting.Details.ControlSlider": {
			"extends": "Setting.Details.ControlHeading",
			"id": "Setting.Details.ControlSlider",
			"properties": {
				"formatlabel": {
					"required": true,
					"type": "string"
				},
				"popup": {
					"required": true,
					"type": "boolean"
				},
				"type": {
					"enums": [
						"slider"
					],
					"required": true,
					"type": "string"
				}
			}
		},
		"Setting.Details.ControlSpinner": {
			"extends": "Setting.Details.ControlBase",
			"id": "Setting.Details.ControlSpinner",
			"properties": {
				"formatlabel": {
					"default": "",
					"type": "string"
				},
				"minimumlabel": {
					"default": "",
					"type": "string"
				},
				"type": {
					"enums": [
						"spinner"
					],
					"required": true,
					"type": "string"
				}
			}
		},
		"Setting.Details.Group": {
			"additionalProperties": false,
			"id": "Setting.Details.Group",
			"properties": {
				"id": {
					"minLength": 1,
					"required": true,
					"type": "string"
				},
				"settings": {
					"items": {
						"$ref": "Setting.Details.Setting"
					},
					"minItems": 1,
					"type": "array",
					"uniqueItems": true
				}
			},
			"type": "object"
		},
		"Setting.Details.Section": {
			"additionalProperties": false,
			"extends": "Setting.Details.Base",
			"id": "Setting.Details.Section",
			"properties": {
				"categories": {
					"items": {
						"$ref": "Setting.Details.Category"
					},
					"minItems": 1,
					"type": "array",
					"uniqueItems": true
				}
			}
		},
		"Setting.Details.Setting": {
			"id": "Setting.Details.Setting",
			"type": [
				{
					"$ref": "Setting.Details.SettingBool"
				},
				{
					"$ref": "Setting.Details.SettingInt"
				},
				{
					"$ref": "Setting.Details.SettingNumber"
				},
				{
					"$ref": "Setting.Details.SettingString"
				},
				{
					"$ref": "Setting.Details.SettingAction"
				},
				{
					"$ref": "Setting.Details.SettingList"
				},
				{
					"$ref": "Setting.Details.SettingPath"
				},
				{
					"$ref": "Setting.Details.SettingAddon"
				}
			]
		},
		"Setting.Details.SettingAction": {
			"additionalProperties": false,
			"extends": "Setting.Details.SettingBase",
			"id": "Setting.Details.SettingAction"
		},
		"Setting.Details.SettingAddon": {
			"additionalProperties": false,
			"extends": "Setting.Details.SettingString",
			"id": "Setting.Details.SettingAddon",
			"properties": {
				"addontype": {
					"$ref": "Addon.Types",
					"required": true
				}
			}
		},
		"Setting.Details.SettingBase": {
			"additionalProperties": false,
			"extends": "Setting.Details.Base",
			"id": "Setting.Details.SettingBase",
			"properties": {
				"control": {
					"$ref": "Setting.Details.Control"
				},
				"enabled": {
					"required": true,
					"type": "boolean"
				},
				"level": {
					"$ref": "Setting.Level",
					"required": true
				},
				"parent": {
					"default": "",
					"type": "string"
				},
				"type": {
					"$ref": "Setting.Type",
					"required": true
				}
			}
		},
		"Setting.Details.SettingBool": {
			"additionalProperties": false,
			"extends": "Setting.Details.SettingBase",
			"id": "Setting.Details.SettingBool",
			"properties": {
				"default": {
					"required": true,
					"type": "boolean"
				},
				"value": {
					"required": true,
					"type": "boolean"
				}
			}
		},
		"Setting.Details.SettingInt": {
			"additionalProperties": false,
			"extends": "Setting.Details.SettingBase",
			"id": "Setting.Details.SettingInt",
			"properties": {
				"default": {
					"required": true,
					"type": "integer"
				},
				"maximum": {
					"default": 0,
					"type": "integer"
				},
				"minimum": {
					"default": 0,
					"type": "integer"
				},
				"options": {
					"items": {
						"properties": {
							"label": {
								"required": true,
								"type": "string"
							},
							"value": {
								"required": true,
								"type": "integer"
							}
						},
						"type": "object"
					},
					"type": "array"
				},
				"step": {
					"default": 0,
					"type": "integer"
				},
				"value": {
					"required": true,
					"type": "integer"
				}
			}
		},
		"Setting.Details.SettingList": {
			"additionalProperties": false,
			"extends": "Setting.Details.SettingBase",
			"id": "Setting.Details.SettingList",
			"properties": {
				"default": {
					"$ref": "Setting.Value.List",
					"required": true
				},
				"definition": {
					"$ref": "Setting.Details.Setting",
					"required": true
				},
				"delimiter": {
					"required": true,
					"type": "string"
				},
				"elementtype": {
					"$ref": "Setting.Type",
					"required": true
				},
				"maximumitems": {
					"default": 0,
					"type": "integer"
				},
				"minimumitems": {
					"default": 0,
					"type": "integer"
				},
				"value": {
					"$ref": "Setting.Value.List",
					"required": true
				}
			}
		},
		"Setting.Details.SettingNumber": {
			"additionalProperties": false,
			"extends": "Setting.Details.SettingBase",
			"id": "Setting.Details.SettingNumber",
			"properties": {
				"default": {
					"required": true,
					"type": "number"
				},
				"maximum": {
					"required": true,
					"type": "number"
				},
				"minimum": {
					"required": true,
					"type": "number"
				},
				"step": {
					"required": true,
					"type": "number"
				},
				"value": {
					"required": true,
					"type": "number"
				}
			}
		},
		"Setting.Details.SettingPath": {
			"additionalProperties": false,
			"extends": "Setting.Details.SettingString",
			"id": "Setting.Details.SettingPath",
			"properties": {
				"sources": {
					"items": {
						"type": "string"
					},
					"type": "array"
				},
				"writable": {
					"required": true,
					"type": "boolean"
				}
			}
		},
		"Setting.Details.SettingString": {
			"extends": "Setting.Details.SettingBase",
			"id": "Setting.Details.SettingString",
			"properties": {
				"allowempty": {
					"required": true,
					"type": "boolean"
				},
				"default": {
					"required": true,
					"type": "string"
				},
				"options": {
					"items": {
						"properties": {
							"label": {
								"required": true,
								"type": "string"
							},
							"value": {
								"required": true,
								"type": "string"
							}
						},
						"type": "object"
					},
					"type": "array"
				},
				"value": {
					"required": true,
					"type": "string"
				}
			}
		},
		"Setting.Level": {
			"default": "basic",
			"enums": [
				"basic",
				"standard",
				"advanced",
				"expert"
			],
			"id": "Setting.Level",
			"type": "string"
		},
		"Setting.Type": {
			"default": "boolean",
			"enums": [
				"boolean",
				"integer",
				"number",
				"string",
				"action",
				"list",
				"path",
				"addon"
			],
			"id": "Setting.Type",
			"type": "string"
		},
		"Setting.Value": {
			"default": null,
			"id": "Setting.Value",
			"type": [
				{
					"type": "boolean"
				},
				{
					"type": "integer"
				},
				{
					"type": "number"
				},
				{
					"type": "string"
				}
			]
		},
		"Setting.Value.Extended": {
			"default": null,
			"id": "Setting.Value.Extended",
			"type": [
				{
					"type": "boolean"
				},
				{
					"type": "integer"
				},
				{
					"type": "number"
				},
				{
					"type": "string"
				},
				{
					"$ref": "Setting.Value.List"
				}
			]
		},
		"Setting.Value.List": {
			"id": "Setting.Value.List",
			"items": {
				"$ref": "Setting.Value"
			},
			"type": "array"
		},
		"System.Property.Name": {
			"default": "canshutdown",
			"enums": [
				"canshutdown",
				"cansuspend",
				"canhibernate",
				"canreboot"
			],
			"id": "System.Property.Name",
			"type": "string"
		},
		"System.Property.Value": {
			"id": "System.Property.Value",
			"properties": {
				"canhibernate": {
					"default": false,
					"type": "boolean"
				},
				"canreboot": {
					"default": false,
					"type": "boolean"
				},
				"canshutdown": {
					"default": false,
					"type": "boolean"
				},
				"cansuspend": {
					"default": false,
					"type": "boolean"
				}
			},
			"type": "object"
		},
		"Textures.Details.Size": {
			"id": "Textures.Details.Size",
			"properties": {
				"height": {
					"default": 0,
					"description": "Height of texture",
					"type": "integer"
				},
				"lastused": {
					"default": "",
					"description": "Date of last use",
					"type": "string"
				},
				"size": {
					"default": 0,
					"description": "Size of the texture (1 == largest)",
					"type": "integer"
				},
				"usecount": {
					"default": 0,
					"description": "Number of uses",
					"type": "integer"
				},
				"width": {
					"default": 0,
					"description": "Width of texture",
					"type": "integer"
				}
			},
			"type": "object"
		},
		"Textures.Details.Texture": {
			"id": "Textures.Details.Texture",
			"properties": {
				"cachedurl": {
					"default": "",
					"description": "Cached URL on disk",
					"type": "string"
				},
				"imagehash": {
					"default": "",
					"description": "Hash of image",
					"type": "string"
				},
				"lasthashcheck": {
					"default": "",
					"description": "Last time source was checked for changes",
					"type": "string"
				},
				"sizes": {
					"items": {
						"$ref": "Textures.Details.Size"
					},
					"type": "array"
				},
				"textureid": {
					"$ref": "Library.Id",
					"default": -1
				},
				"url": {
					"default": "",
					"description": "Original source URL",
					"type": "string"
				}
			},
			"type": "object"
		},
		"Textures.Fields.Texture": {
			"extends": "Item.Fields.Base",
			"id": "Textures.Fields.Texture",
			"items": {
				"enums": [
					"url",
					"cachedurl",
					"lasthashcheck",
					"imagehash",
					"sizes"
				],
				"type": "string"
			}
		},
		"Video.Cast": {
			"id": "Video.Cast",
			"items": {
				"additionalProperties": false,
				"properties": {
					"name": {
						"required": true,
						"type": "string"
					},
					"order": {
						"required": true,
						"type": "integer"
					},
					"role": {
						"required": true,
						"type": "string"
					},
					"thumbnail": {
						"default": "",
						"type": "string"
					}
				},
				"type": "object"
			},
			"type": "array"
		},
		"Video.Details.Base": {
			"extends": "Media.Details.Base",
			"id": "Video.Details.Base",
			"properties": {
				"art": {
					"$ref": "Media.Artwork"
				},
				"playcount": {
					"default": 0,
					"type": "integer"
				}
			}
		},
		"Video.Details.Episode": {
			"extends": "Video.Details.File",
			"id": "Video.Details.Episode",
			"properties": {
				"cast": {
					"$ref": "Video.Cast"
				},
				"episode": {
					"default": 0,
					"type": "integer"
				},
				"episodeid": {
					"$ref": "Library.Id",
					"required": true
				},
				"firstaired": {
					"default": "",
					"type": "string"
				},
				"originaltitle": {
					"default": "",
					"type": "string"
				},
				"productioncode": {
					"default": "",
					"type": "string"
				},
				"rating": {
					"default": 0,
					"type": "number"
				},
				"ratings": {
					"default": null,
					"type": "any"
				},
				"season": {
					"default": 0,
					"type": "integer"
				},
				"seasonid": {
					"$ref": "Library.Id",
					"default": -1
				},
				"showtitle": {
					"default": "",
					"type": "string"
				},
				"specialsortepisode": {
					"default": 0,
					"type": "integer"
				},
				"specialsortseason": {
					"default": 0,
					"type": "integer"
				},
				"tvshowid": {
					"$ref": "Library.Id",
					"default": -1
				},
				"uniqueid": {
					"$ref": "Media.UniqueID"
				},
				"userrating": {
					"default": 0,
					"type": "integer"
				},
				"votes": {
					"default": "",
					"type": "string"
				},
				"writer": {
					"$ref": "Array.String"
				}
			}
		},
		"Video.Details.File": {
			"extends": "Video.Details.Item",
			"id": "Video.Details.File",
			"properties": {
				"director": {
					"$ref": "Array.String"
				},
				"resume": {
					"$ref": "Video.Resume"
				},
				"runtime": {
					"default": 0,
					"description": "Runtime in seconds",
					"type": "integer"
				},
				"streamdetails": {
					"$ref": "Video.Streams"
				}
			}
		},
		"Video.Details.Item": {
			"extends": "Video.Details.Media",
			"id": "Video.Details.Item",
			"properties": {
				"dateadded": {
					"default": "",
					"type": "string"
				},
				"file": {
					"default": "",
					"type": "string"
				},
				"lastplayed": {
					"default": "",
					"type": "string"
				},
				"plot": {
					"default": "",
					"type": "string"
				}
			}
		},
		"Video.Details.Media": {
			"extends": "Video.Details.Base",
			"id": "Video.Details.Media",
			"properties": {
				"title": {
					"default": "",
					"type": "string"
				}
			}
		},
		"Video.Details.Movie": {
			"extends": "Video.Details.File",
			"id": "Video.Details.Movie",
			"properties": {
				"cast": {
					"$ref": "Video.Cast"
				},
				"country": {
					"$ref": "Array.String"
				},
				"genre": {
					"$ref": "Array.String"
				},
				"imdbnumber": {
					"default": "",
					"type": "string"
				},
				"movieid": {
					"$ref": "Library.Id",
					"required": true
				},
				"mpaa": {
					"default": "",
					"type": "string"
				},
				"originaltitle": {
					"default": "",
					"type": "string"
				},
				"plotoutline": {
					"default": "",
					"type": "string"
				},
				"premiered": {
					"default": "",
					"type": "string"
				},
				"rating": {
					"default": 0,
					"type": "number"
				},
				"ratings": {
					"default": null,
					"type": "any"
				},
				"set": {
					"default": "",
					"type": "string"
				},
				"setid": {
					"$ref": "Library.Id",
					"default": -1
				},
				"showlink": {
					"$ref": "Array.String"
				},
				"sorttitle": {
					"default": "",
					"type": "string"
				},
				"studio": {
					"$ref": "Array.String"
				},
				"tag": {
					"$ref": "Array.String"
				},
				"tagline": {
					"default": "",
					"type": "string"
				},
				"top250": {
					"default": 0,
					"type": "integer"
				},
				"trailer": {
					"default": "",
					"type": "string"
				},
				"uniqueid": {
					"$ref": "Media.UniqueID"
				},
				"userrating": {
					"default": 0,
					"type": "integer"
				},
				"votes": {
					"default": "",
					"type": "string"
				},
				"writer": {
					"$ref": "Array.String"
				},
				"year": {
					"default": 0,
					"type": "integer"
				}
			}
		},
		"Video.Details.MovieSet": {
			"extends": "Video.Details.Media",
			"id": "Video.Details.MovieSet",
			"properties": {
				"plot": {
					"default": "",
					"type": "string"
				},
				"setid": {
					"$ref": "Library.Id",
					"required": true
				}
			}
		},
		"Video.Details.MovieSet.Extended": {
			"extends": "Video.Details.MovieSet",
			"id": "Video.Details.MovieSet.Extended",
			"properties": {
				"limits": {
					"$ref": "List.LimitsReturned",
					"required": true
				},
				"movies": {
					"items": {
						"$ref": "Video.Details.Movie"
					},
					"type": "array"
				}
			}
		},
		"Video.Details.MusicVideo": {
			"extends": "Video.Details.File",
			"id": "Video.Details.MusicVideo",
			"properties": {
				"album": {
					"default": "",
					"type": "string"
				},
				"artist": {
					"$ref": "Array.String"
				},
				"genre": {
					"$ref": "Array.String"
				},
				"musicvideoid": {
					"$ref": "Library.Id",
					"required": true
				},
				"premiered": {
					"default": "",
					"type": "string"
				},
				"rating": {
					"default": 0,
					"type": "number"
				},
				"studio": {
					"$ref": "Array.String"
				},
				"tag": {
					"$ref": "Array.String"
				},
				"track": {
					"default": 0,
					"type": "integer"
				},
				"userrating": {
					"default": 0,
					"type": "integer"
				},
				"year": {
					"default": 0,
					"type": "integer"
				}
			}
		},
		"Video.Details.Season": {
			"extends": "Video.Details.Base",
			"id": "Video.Details.Season",
			"properties": {
				"episode": {
					"default": 0,
					"type": "integer"
				},
				"season": {
					"required": true,
					"type": "integer"
				},
				"seasonid": {
					"$ref": "Library.Id",
					"required": true
				},
				"showtitle": {
					"default": "",
					"type": "string"
				},
				"tvshowid": {
					"$ref": "Library.Id",
					"default": -1
				},
				"userrating": {
					"default": 0,
					"type": "integer"
				},
				"watchedepisodes": {
					"default": 0,
					"type": "integer"
				}
			}
		},
		"Video.Details.TVShow": {
			"extends": "Video.Details.Item",
			"id": "Video.Details.TVShow",
			"properties": {
				"cast": {
					"$ref": "Video.Cast"
				},
				"episode": {
					"default": 0,
					"type": "integer"
				},
				"episodeguide": {
					"default": "",
					"type": "string"
				},
				"genre": {
					"$ref": "Array.String"
				},
				"imdbnumber": {
					"default": "",
					"type": "string"
				},
				"mpaa": {
					"default": "",
					"type": "string"
				},
				"originaltitle": {
					"default": "",
					"type": "string"
				},
				"premiered": {
					"default": "",
					"type": "string"
				},
				"rating": {
					"default": 0,
					"type": "number"
				},
				"ratings": {
					"default": null,
					"type": "any"
				},
				"runtime": {
					"default": 0,
					"description": "Runtime in seconds",
					"type": "integer"
				},
				"season": {
					"default": 0,
					"type": "integer"
				},
				"sorttitle": {
					"default": "",
					"type": "string"
				},
				"studio": {
					"$ref": "Array.String"
				},
				"tag": {
					"$ref": "Array.String"
				},
				"tvshowid": {
					"$ref": "Library.Id",
					"required": true
				},
				"uniqueid": {
					"$ref": "Media.UniqueID"
				},
				"userrating": {
					"default": 0,
					"type": "integer"
				},
				"votes": {
					"default": "",
					"type": "string"
				},
				"watchedepisodes": {
					"default": 0,
					"type": "integer"
				},
				"year": {
					"default": 0,
					"type": "integer"
				}
			}
		},
		"Video.Fields.Episode": {
			"extends": "Item.Fields.Base",
			"id": "Video.Fields.Episode",
			"items": {
				"description": "Requesting the cast, ratings, streamdetails, uniqueid and/or tag field will result in increased response times",
				"enums": [
					"title",
					"plot",
					"votes",
					"rating",
					"writer",
					"firstaired",
					"playcount",
					"runtime",
					"director",
					"productioncode",
					"season",
					"episode",
					"originaltitle",
					"showtitle",
					"cast",
					"streamdetails",
					"lastplayed",
					"fanart",
					"thumbnail",
					"file",
					"resume",
					"tvshowid",
					"dateadded",
					"uniqueid",
					"art",
					"specialsortseason",
					"specialsortepisode",
					"userrating",
					"seasonid",
					"ratings"
				],
				"type": "string"
			}
		},
		"Video.Fields.Movie": {
			"extends": "Item.Fields.Base",
			"id": "Video.Fields.Movie",
			"items": {
				"description": "Requesting the cast, ratings, showlink, streamdetails, uniqueid and/or tag field will result in increased response times",
				"enums": [
					"title",
					"genre",
					"year",
					"rating",
					"director",
					"trailer",
					"tagline",
					"plot",
					"plotoutline",
					"originaltitle",
					"lastplayed",
					"playcount",
					"writer",
					"studio",
					"mpaa",
					"cast",
					"country",
					"imdbnumber",
					"runtime",
					"set",
					"showlink",
					"streamdetails",
					"top250",
					"votes",
					"fanart",
					"thumbnail",
					"file",
					"sorttitle",
					"resume",
					"setid",
					"dateadded",
					"tag",
					"art",
					"userrating",
					"ratings",
					"premiered",
					"uniqueid"
				],
				"type": "string"
			}
		},
		"Video.Fields.MovieSet": {
			"extends": "Item.Fields.Base",
			"id": "Video.Fields.MovieSet",
			"items": {
				"enums": [
					"title",
					"playcount",
					"fanart",
					"thumbnail",
					"art",
					"plot"
				],
				"type": "string"
			}
		},
		"Video.Fields.MusicVideo": {
			"extends": "Item.Fields.Base",
			"id": "Video.Fields.MusicVideo",
			"items": {
				"description": "Requesting the streamdetails and/or tag field will result in increased response times",
				"enums": [
					"title",
					"playcount",
					"runtime",
					"director",
					"studio",
					"year",
					"plot",
					"album",
					"artist",
					"genre",
					"track",
					"streamdetails",
					"lastplayed",
					"fanart",
					"thumbnail",
					"file",
					"resume",
					"dateadded",
					"tag",
					"art",
					"rating",
					"userrating",
					"premiered"
				],
				"type": "string"
			}
		},
		"Video.Fields.Season": {
			"extends": "Item.Fields.Base",
			"id": "Video.Fields.Season",
			"items": {
				"enums": [
					"season",
					"showtitle",
					"playcount",
					"episode",
					"fanart",
					"thumbnail",
					"tvshowid",
					"watchedepisodes",
					"art",
					"userrating"
				],
				"type": "string"
			}
		},
		"Video.Fields.TVShow": {
			"extends": "Item.Fields.Base",
			"id": "Video.Fields.TVShow",
			"items": {
				"description": "Requesting the cast, ratings, uniqueid and/or tag field will result in increased response times",
				"enums": [
					"title",
					"genre",
					"year",
					"rating",
					"plot",
					"studio",
					"mpaa",
					"cast",
					"playcount",
					"episode",
					"imdbnumber",
					"premiered",
					"votes",
					"lastplayed",
					"fanart",
					"thumbnail",
					"file",
					"originaltitle",
					"sorttitle",
					"episodeguide",
					"season",
					"watchedepisodes",
					"dateadded",
					"tag",
					"art",
					"userrating",
					"ratings",
					"runtime",
					"uniqueid"
				],
				"type": "string"
			}
		},
		"Video.Rating": {
			"id": "Video.Rating",
			"properties": {
				"default": {
					"default": false,
					"type": "boolean"
				},
				"rating": {
					"required": true,
					"type": "number"
				},
				"votes": {
					"default": 0,
					"type": "integer"
				}
			},
			"type": "object"
		},
		"Video.Ratings": {
			"additionalProperties": {
				"$ref": "Video.Rating"
			},
			"id": "Video.Ratings",
			"type": "object"
		},
		"Video.Ratings.Set": {
			"additionalProperties": {
				"default": null,
				"type": [
					{
						"type": "null"
					},
					{
						"$ref": "Video.Rating"
					}
				]
			},
			"id": "Video.Ratings.Set",
			"type": "object"
		},
		"Video.Resume": {
			"additionalProperties": false,
			"id": "Video.Resume",
			"properties": {
				"position": {
					"default": 0,
					"minimum": 0,
					"type": "number"
				},
				"total": {
					"default": 0,
					"minimum": 0,
					"type": "number"
				}
			},
			"type": "object"
		},
		"Video.Streams": {
			"additionalProperties": false,
			"id": "Video.Streams",
			"properties": {
				"audio": {
					"items": {
						"additionalProperties": false,
						"properties": {
							"channels": {
								"default": 0,
								"type": "integer"
							},
							"codec": {
								"default": "",
								"type": "string"
							},
							"language": {
								"default": "",
								"type": "string"
							}
						},
						"type": "object"
					},
					"minItems": 1,
					"type": "array"
				},
				"subtitle": {
					"items": {
						"additionalProperties": false,
						"properties": {
							"language": {
								"default": "",
								"type": "string"
							}
						},
						"type": "object"
					},
					"minItems": 1,
					"type": "array"
				},
				"video": {
					"items": {
						"additionalProperties": false,
						"properties": {
							"aspect": {
								"default": 0,
								"type": "number"
							},
							"codec": {
								"default": "",
								"type": "string"
							},
							"duration": {
								"default": 0,
								"type": "integer"
							},
							"height": {
								"default": 0,
								"type": "integer"
							},
							"width": {
								"default": 0,
								"type": "integer"
							}
						},
						"type": "object"
					},
					"minItems": 1,
					"type": "array"
				}
			},
			"type": "object"
		}
	},
	"version": "8.0.0"
}
