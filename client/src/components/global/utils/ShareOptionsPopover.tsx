import { Grid, IconButton, Popover, Tooltip, Typography, Zoom } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ShareIcon from '@material-ui/icons/Share';
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';

const useStyles = makeStyles((theme) => ({
  componentWrapper: {
    margin: 0,
    padding: 0,
  },
  sharePopoverContentWrapper: {
    paddingBottom: 25,
    paddingRight: 25,
    paddingLeft: 20,
    paddingTop: 15,
    maxWidth: 240,
  },
  shareTypography: {
    color: theme.palette.primary.main,
    paddingTop: 13,
    paddingLeft: 9,
  },
  shareTypography2: {
    paddingTop: 13,
    paddingBottom: 13,
    fontSize: 15,
  },
}));

const ShareSocialIcon = (props: any) => {
  const [shareAnchorEl, setShareAnchorEl] = React.useState(null);
  const [copied, setCopied] = React.useState(false);
  const classes = useStyles();
  const openSharePopover = Boolean(shareAnchorEl);
  const { color, size, post } = props;

  const { id, title, description } = post;

  const handleSharePopoverOpen = (event: any) => {
    setShareAnchorEl(event.currentTarget);
  };

  const handleShareClose = () => {
    setShareAnchorEl(null);
    setCopied(false);
  };

  const params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=550,height=450,left=1000,top=500`;
  let url = '';
  if (typeof window !== 'undefined') {
    url = window?.location.href;
  }
  const shareLinkedin = () => {
    if (typeof window !== 'undefined') {
      const w = window?.open('about:blank', 'share', params);

      if (w) {
        w.location.href = `https://www.linkedin.com/shareArticle?mini=true&title=${title}&summary=${description}&url=${encodeURIComponent(
          url
        )}`;
      }
    }
  };

  return (
    <>
      <Tooltip title="Share to social">
        <IconButton
          aria-label="share"
          size={size || 'medium'}
          onClick={handleSharePopoverOpen}
          style={{ backgroundColor: 'transparent' }}
          disableRipple
        >
          <ShareIcon fontSize="small" style={{ color }} />
        </IconButton>
      </Tooltip>
      <Popover
        id={`${id}Share`}
        open={openSharePopover}
        anchorEl={shareAnchorEl}
        onClose={handleShareClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        TransitionComponent={Zoom}
        transitionDuration="auto"
      >
        <div className={classes.sharePopoverContentWrapper}>
          <Grid container>
            <Grid container item justify="flex-start" xs={6}>
              <Typography className={classes.shareTypography}>Share with</Typography>
            </Grid>
            <Grid container item justify="flex-end" xs={6}>
              {copied ? (
                <Typography
                  className={classes.shareTypography2}
                  role="sharesocialicon-copy-message"
                >
                  URL Copied
                </Typography>
              ) : (
                <CopyToClipboard
                  text={url}
                  onCopy={() => {
                    setCopied(true);
                  }}
                >
                  <Tooltip arrow title="Copy to Clipboard" TransitionComponent={Zoom}>
                    <IconButton
                      color="primary"
                      style={{ backgroundColor: 'transparent' }}
                      disableRipple
                    >
                      <FileCopyIcon />
                    </IconButton>
                  </Tooltip>
                </CopyToClipboard>
              )}
            </Grid>
            <Grid container item>
              <Grid container item xs={3} justify="center">
                <Tooltip arrow title="Linkedin" TransitionComponent={Zoom}>
                  <IconButton
                    onClick={shareLinkedin}
                    style={{ backgroundColor: 'transparent' }}
                    disableRipple
                  >
                    <LinkedinIcon size={32} round={true} />
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid container item xs={3} justify="center">
                <Tooltip arrow title="Twitter" TransitionComponent={Zoom}>
                  <TwitterShareButton title={title} via="WeAreStillDreamers" url={url}>
                    <TwitterIcon size={32} round={true} />
                  </TwitterShareButton>
                </Tooltip>
              </Grid>

              <Grid container item xs={3} justify="center">
                <Tooltip arrow title="Workplace" TransitionComponent={Zoom}>
                  <FacebookShareButton quote={title} url={url}>
                    <FacebookIcon size={32} round={true} />
                  </FacebookShareButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Popover>
    </>
  );
};
export default ShareSocialIcon;
