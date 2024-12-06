import whisper
def transcribe_audio(audio_file_path):
    model = whisper.load_model("base")
    result = model.transcribe(audio_file_path)
    transcribed_text = result['text']
    print(transcribed_text)

audio_file_path = input("enter the audio path: ")
transcription = transcribe_audio(audio_file_path)
print(transcription)