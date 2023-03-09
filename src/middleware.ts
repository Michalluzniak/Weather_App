import { NextRequest, NextResponse } from "next/server";

type Req = {
    search: string;
};

type ExtendedNextReq = Req & NextRequest;

// set user location city if possible, if not set default "new york"
export async function middleware(req: ExtendedNextReq) {
    const { nextUrl: url, geo } = req;
    const city = geo!.city || "new york";

    if (url.searchParams.get("city") === null) {
        url.searchParams.set("city", city);

        url.search = `?city=${city}`;

        return NextResponse.rewrite(url);
    }
}
