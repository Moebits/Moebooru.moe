CREATE TABLE IF NOT EXISTS "users" (
    "username" text PRIMARY KEY,
    "email" text UNIQUE NOT NULL,
    "joinDate" date,
    "role" text,
    "bio" text,
    "emailVerified" boolean,
    "$2fa" boolean,
    "publicFavorites" boolean,
    "image" text,
    "ip" inet,
    "banned" boolean,
    "password" text
);

CREATE TABLE IF NOT EXISTS "posts" (
    "postID" int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "uploader" text REFERENCES "users" ("username") ON UPDATE CASCADE ON DELETE SET NULL,
    "updater" text REFERENCES "users" ("username") ON UPDATE CASCADE ON DELETE SET NULL,
    "type" text,
    "restrict" text,
    "style" text,
    "thirdParty" boolean,
    "drawn" date,
    "uploadDate" timestamptz,
    "updatedDate" timestamptz,
    "title" text,
    "translatedTitle" text,
    "artist" text,
    "link" text,
    "commentary" text,
    "translatedCommentary" text
);

CREATE TABLE IF NOT EXISTS "unverified posts" (
    "postID" int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "originalID" int REFERENCES posts ("postID") ON DELETE CASCADE,
    "reason" text,
    "duplicates" boolean,
    "newTags" int,
    "uploader" text REFERENCES "users" ("username") ON UPDATE CASCADE ON DELETE SET NULL,
    "updater" text REFERENCES "users" ("username") ON UPDATE CASCADE ON DELETE SET NULL,
    "type" text,
    "restrict" text,
    "style" text,
    "thirdParty" boolean,
    "drawn" date,
    "uploadDate" timestamptz,
    "updatedDate" timestamptz,
    "title" text,
    "translatedTitle" text,
    "artist" text,
    "link" text,
    "commentary" text,
    "translatedCommentary" text,
    "thumbnail" text
);

CREATE TABLE IF NOT EXISTS "images" (
    "imageID" int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "postID" int REFERENCES posts ON DELETE CASCADE,
    "type" text,
    "filename" text,
    "width" int,
    "height" int,
    "size" int,
    "order" int,
    "hash" text
);

CREATE TABLE IF NOT EXISTS "unverified images" (
    "imageID" int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "postID" int REFERENCES "unverified posts" ON DELETE CASCADE,
    "type" text,
    "filename" text,
    "width" int,
    "height" int,
    "size" int,
    "order" int,
    "hash" text
);

CREATE TABLE IF NOT EXISTS "tags" (
    "tag" text PRIMARY KEY,
    "type" text,
    "image" text,
    "description" text,
    "website" text,
    "pixiv" text,
    "twitter" text,
    "fandom" text
);

CREATE TABLE IF NOT EXISTS "unverified tags" (
    "tag" text PRIMARY KEY,
    "type" text,
    "image" text,
    "description" text,
    "website" text,
    "pixiv" text,
    "twitter" text,
    "fandom" text
);

CREATE TABLE IF NOT EXISTS "tag map" (
    "tagID" int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "postID" int REFERENCES "posts" ON DELETE CASCADE,
    "tag" text REFERENCES "tags" ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS "unverified tag map" (
    "tagID" int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "postID" int REFERENCES "unverified posts" ON DELETE CASCADE,
    "tag" text REFERENCES "unverified tags" ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS "aliases" (
    "aliasID" int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "tag" text REFERENCES "tags" ON UPDATE CASCADE ON DELETE CASCADE,
    "alias" text
);

CREATE TABLE IF NOT EXISTS "unverified aliases" (
    "aliasID" int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "tag" text REFERENCES "unverified tags" ON UPDATE CASCADE ON DELETE CASCADE,
    "alias" text
);

CREATE TABLE IF NOT EXISTS "implication map" (
    "implicationID" int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "tag" text REFERENCES "tags" ON UPDATE CASCADE ON DELETE CASCADE,
    "implication" text REFERENCES "tags" ("tag") ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS "third party" (
    "thirdPartyID" int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "postID" int REFERENCES "posts" ON DELETE CASCADE,
    "parentID" int REFERENCES "posts" ("postID") ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS "unverified third party" (
    "thirdPartyID" int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "postID" int REFERENCES "unverified posts" ON DELETE CASCADE,
    "parentID" int REFERENCES "posts" ("postID") ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS "session" (
  "sessionID" varchar NOT NULL COLLATE "default" PRIMARY KEY NOT DEFERRABLE INITIALLY IMMEDIATE,
  "session" json NOT NULL,
  "expires" timestamp(6) NOT NULL
) WITH (OIDS=FALSE);

CREATE INDEX IF NOT EXISTS "IDX_session_expire" ON "session" ("expires");

CREATE TABLE IF NOT EXISTS "email tokens" (
    "email" text PRIMARY KEY,
    "token" text,
    "expires" timestamptz
);

CREATE TABLE IF NOT EXISTS "2fa tokens" (
    "username" text PRIMARY KEY REFERENCES "users" ON UPDATE CASCADE ON DELETE CASCADE,
    "token" text,
    "qrcode" text
);

CREATE TABLE IF NOT EXISTS "password tokens" (
    "username" text PRIMARY KEY REFERENCES "users" ON UPDATE CASCADE ON DELETE CASCADE,
    "token" text,
    "expires" timestamptz
);

CREATE TABLE IF NOT EXISTS "comments" (
    "commentID" int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "postID" int REFERENCES "posts" ON DELETE CASCADE,
    "username" text REFERENCES "users" ON UPDATE CASCADE ON DELETE CASCADE,
    "comment" text,
    "postDate" timestamptz,
    "editedDate" timestamptz
);

CREATE TABLE IF NOT EXISTS "favorites" (
    "favoriteID" int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "postID" int REFERENCES "posts" ON DELETE CASCADE,
    "username" text REFERENCES "users" ON UPDATE CASCADE ON DELETE CASCADE,
    "favoriteDate" timestamptz
);

CREATE TABLE IF NOT EXISTS "cuteness" (
    "cutenessID" int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "postID" int REFERENCES "posts" ON DELETE CASCADE,
    "username" text REFERENCES "users" ON UPDATE CASCADE ON DELETE CASCADE,
    "cuteness" int,
    "cutenessDate" timestamptz
);

CREATE TABLE IF NOT EXISTS "delete requests" (
    "deleteRequestID" int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "username" text REFERENCES "users" ON UPDATE CASCADE ON DELETE CASCADE,
    "postID" int REFERENCES "posts" ON DELETE CASCADE,
    "tag" text REFERENCES "tags" ON UPDATE CASCADE ON DELETE CASCADE,
    "reason" text
);

CREATE TABLE IF NOT EXISTS "alias requests" (
    "aliasRequestID" int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "username" text REFERENCES "users" ON UPDATE CASCADE ON DELETE CASCADE,
    "tag" text REFERENCES "tags" ON UPDATE CASCADE ON DELETE CASCADE,
    "aliasTo" text REFERENCES "tags" ("tag") ON UPDATE CASCADE ON DELETE CASCADE,
    "reason" text
);

CREATE TABLE IF NOT EXISTS "tag edit requests" (
    "tagEditRequestID" int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "username" text REFERENCES "users" ON UPDATE CASCADE ON DELETE CASCADE,
    "tag" text REFERENCES "tags" ON UPDATE CASCADE ON DELETE CASCADE,
    "key" text,
    "description" text,
    "image" text,
    "aliases" text[],
    "implications" text[],
    "website" text,
    "pixiv" text,
    "twitter" text,
    "fandom" text,
    "reason" text
);

CREATE TABLE IF NOT EXISTS "reported comments" (
    "commentReportID" int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "reporter" text REFERENCES "users" ("username") ON UPDATE CASCADE ON DELETE CASCADE,
    "commentID" int REFERENCES "comments" ON DELETE CASCADE,
    "reason" text
);