import Image from '@/models/Image';
import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { readFileSync } from 'fs';
import connect from '@/utils/database';

export async function GET(request: NextRequest) {
	await connect();

	try {
		const files = await Image.find({});
		return NextResponse.json(files, { status: 200 });
	} catch (error: any) {
		return new NextResponse(error, { status: 500 });
	}
}

export async function POST(request: NextRequest) {
	await connect();
	try {
		const data = await request.formData();
		const name = data.get('name');
		const file: File | null = data.get('file') as unknown as File;
		console.log(file);

		// newImage.image.data = readFileSync(file.path);

		const bytes = await file.arrayBuffer();
		const buffer = Buffer.from(bytes);
		console.log(buffer);
		const newImage = new Image({ name, photo: buffer });
		// newImage.image.data = readFileSync(file.path);
		// newImage.image.contentType = file.type;
		// console.log(file);

		await newImage.save();
		return NextResponse.json(newImage, { status: 201 });
	} catch (error: any) {
		return new NextResponse(error, { status: 500 });
	}
}
