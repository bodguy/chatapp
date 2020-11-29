import React, { useState } from 'react';
import { Picker, emojiIndex } from 'emoji-mart';
import ReactTextareaAutocomplete from '@webscopeio/react-textarea-autocomplete';
import Icon from '@/icons';
import LoadingSpinner from '@/loading/loadingSpinner';
import LoadingBar from '@/loading/loadingBar';
import ResizableTextarea from '@/resizableTextarea';
import {
  MessageWriterContainer,
  IconContainer,
  EmojiMart,
} from './style';

const MessageTextArea = React.forwardRef((props, ref) => (
  <ResizableTextarea inputRef={ref} minRows={1} maxRows={22} {...props} />
));

const MessageWriter = () => {
  const [messageValue, setMessageValue] = useState('');
  const [toggleEmoji, setEmojiToggle] = useState(false);
  const [loadingSend, setLoadingSend] = useState(false);

  const sendMessage = () => {
    console.log(messageValue);
    setLoadingSend(true);
    setTimeout(() => setLoadingSend(false), 2000);
  }

  const handleEnterKey = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  const toggleEmojiPanel = (e) => {
    setEmojiToggle(!toggleEmoji);
  }

  const addEmoji = (e) => {
    setMessageValue(messageValue + selectEmoji(e));
    setEmojiToggle(false);
  }

  const selectEmoji = (e) => {
    if (e.unified.length <= 5) {
      return String.fromCodePoint('0x' + e.unified);
    }

    let sym = e.unified.split('-');
    let codesArray = [];
    sym.forEach(v => codesArray.push('0x' + v));
    return String.fromCodePoint(...codesArray);
  }

  const EmojiTrigger = {
    ':': {
      dataProvider: token =>
        emojiIndex.search(token).slice(0, 10).map(o => ({
          colons: o.colons,
          native: selectEmoji(o),
        })),
      component: ({ entity: { native, colons } }) => (
        <div>{native}</div>
      ),
      output: item => item.native,
    },
    "@": {
      dataProvider: token =>
        new Promise(res =>
          setTimeout(() => {
            res([{ name: "jakub", char: "Jakub" }]);
          }, 1000)
        ),
      component: ({ entity: { name, char } }) => (
        <div>{`${name}: ${char}`}</div>
      ),
      output: item => item.name,
    },
  };

  return (
    <MessageWriterContainer>
      {loadingSend && <LoadingBar />}
      <IconContainer onClick={toggleEmojiPanel}>
        <Icon glyph="emoji" size={32} />
      </IconContainer>
      <ReactTextareaAutocomplete
        trigger={EmojiTrigger}
        loadingComponent={() => <LoadingSpinner size="small" />}
        placeholder="메세지를 입력하세요."
        value={messageValue}
        onChange={e => setMessageValue(e.target.value)}
        onKeyDown={handleEnterKey}
        textAreaComponent={MessageTextArea}
      />

      <IconContainer onClick={sendMessage}>
        <Icon glyph="send" size={32} />
      </IconContainer>

      {
        toggleEmoji ? (
          <EmojiMart>
            <Picker set="emojione" onSelect={addEmoji} />
          </EmojiMart>
        ) : null
      }
    </MessageWriterContainer>
  );
}

export default MessageWriter;